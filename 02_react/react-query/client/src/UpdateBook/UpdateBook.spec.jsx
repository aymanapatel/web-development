import { Route } from "react-router-dom";

import { UpdateBook } from "./UpdateBook";
import { useFetchBook } from "./useFetchBook";
import { useUpdateBook } from "./useUpdateBook";
import { BookForm } from "../shared/BookForm";
import { fireEvent, waitFor } from "@testing-library/react";

jest.mock("./useFetchBook", () => ({
  useFetchBook: jest.fn(), // Name of Function
}));

jest.mock("./useUpdateBook", () => ({
  useUpdateBook: jest.fn(), // Name of Function
}));

jest.mock("../shared/BookForm", () => ({
  BookForm: jest.fn(), // Name of Function
}));





describe("Update Book", () => {
  beforeEach(() => {
    useFetchBook.mockImplementation(() => ({}));
    useUpdateBook.mockImplementation(() => ({}));
    BookForm.mockImplementation(() => null);
    
  });

  it("Fetches the book data for the given id", () => {
    renderWithRouter(
      () => (
        <Route path="/:id">
          <UpdateBook />
        </Route>
      ),
      "/test-book-id"
    );

    expect(useFetchBook).toHaveBeenCalledWith("test-book-id");
  });



  describe("While Loading", () => {
     it("renders a loader", () => {
      useFetchBook.mockImplementation(() => ({
        isLoading: true,
      }));

      const { getByTestId } = renderWithRouter(
        () => (
          <Route path="/:id">
            <UpdateBook />
          </Route>
        ),
        "/test-book-id"
      );
      expect(getByTestId("loader")).toBeTruthy();
    });
  });

  describe("With Error", () => {
    it("renders a loader", () => {
      useFetchBook.mockImplementation(() => ({
        isError: true,
        error: {message: "Something went bad"}
      }));

      const { container } = renderWithRouter(
        () => (
          <Route path="/:id">
            <UpdateBook />
          </Route>
        ),
        "/test-book-id"
      );
      expect(container.innerHTML).toMatch("Error: Something went bad");
    });
  });

  describe("While Correct Data", () => {
    it("renders update book title and book form", () => {
      useFetchBook.mockImplementation(() => ({
        data: {
          hello: "world"
        }
      }));

      const { container } = renderWithRouter(
        () => (
          <Route path="/:id">
            <UpdateBook />
          </Route>
        ),
        "/test-book-id"
      );
      expect(container.innerHTML).toMatch("Update Book");
      expect(BookForm).toBeCalledWith(
        expect.objectContaining({
          defaultValues: {"hello": "world"},
        }), 
        {}
      )


    });
    describe("On Book Form Submit", () => {
      it("updates the book data and navigates to the root page", async () => {
        BookForm.mockImplementation(({ onFormSubmit }) => (
          <button onClick={() => onFormSubmit({ foo: "bar" })}>Submit</button>
        ));
        const mutateAsync = jest.fn();

        useUpdateBook.mockImplementation(() => ({ mutateAsync }));

        const { getByText, history } = renderWithRouter(
          () => (
            <Route path="/:id">
              <UpdateBook />
            </Route>
          ),
          "/test-book-id"
        );

        fireEvent.click(getByText("Submit"));

        expect(mutateAsync).toHaveBeenCalledWith({
          foo: "bar",
          id: "test-book-id",
        });

        await waitFor(() => {
          expect(history.location.pathname).toEqual("/")
        });
      });
    });
    });
  
});
