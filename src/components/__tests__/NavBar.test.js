import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // screen.debug();
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});

test("renders link to user profile if user is logged in", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  // screen.debug();
  const profileAvatar = await screen.findByText("Profile");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders sign-in and sign-up buttons again on logout", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
  
    // screen.debug();
    const signOutLink = await screen.findByRole("link", {name: "Sign out"})
    fireEvent.click(signOutLink)
    const signInLink = await screen.findByRole("link", { name: "Sign in" })
    const signUpLink = await screen.findByRole("link", { name: "Sign up" })
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });