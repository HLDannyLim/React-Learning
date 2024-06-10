import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { HomePage } from "./layouts/HomePage/HomePage";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage.tsx/BookCheckoutPage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, LoginCallback, useOktaAuth } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import { ReviewListPage } from "./layouts/BookCheckoutPage.tsx/ReviewListPage/ReviewListPage";
import { ShelfPage } from "./layouts/ShelfPage/ShelfPage";
import { SecureRoute } from "./layouts/Utils/SecureRoute";
import { MessagesPage } from "./layouts/MessagesPage/MessagesPage";
import { ManageLibraryPage } from "./layouts/ManageLibraryPage/ManageLibraryPage";


const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const navigate = useNavigate();
  const customAuthHandler = () => {

    navigate("/login");
    // history.push('/login');
  }
  // const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    const relativeUrl = toRelativeUrl(originalUri || '/', window.location.origin);
    navigate(relativeUrl, { replace: true });
  };




  return (
    <div className="d-flex flex-column min-vh-100">
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchBooksPage />} />
        <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
        <Route path="/login" element={<LoginWidget config={oktaConfig} />} />
        <Route path="/login/callback" element={<LoginCallback />} />
        <Route path="/reviewlist/:bookId" element={<ReviewListPage />} />
        <Route element={<SecureRoute />}>
          <Route path="/shelf" element={<ShelfPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/admin" element={<ManageLibraryPage />} />
        </Route>
      </Routes>
      </div>
      {/* If using react-router-dom version 5 */}
      {/* 
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <HomePage />
          </Route>
          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          <Route path='/reviewlist/:bookId'>
            <ReviewListPage/>
          </Route>
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage/>
          </Route>
          <Route path='/login' render={
            () => <LoginWidget config={oktaConfig} /> 
            } 
          />
          <Route path='/login/callback' component={LoginCallback} />
          <SecureRoute path='/shelf'> <ShelfPage/> </SecureRoute>
          <SecureRoute path='/messages'> <MessagesPage/> </SecureRoute>
          <SecureRoute path='/admin'> <ManageLibraryPage/> </SecureRoute>
        </Switch>
        */}

      <Footer />
      </Security>
    </div>
  );
};
