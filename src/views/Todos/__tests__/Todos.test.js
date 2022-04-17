import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import renderer, { act } from "react-test-renderer";
import wait from "waait";

import { ALL_TODOS } from "../../../queries";
import Todos from "../Todos";

describe('component "Todos"', () => {
  const getComponent = (mocks = []) => (
    renderer.create(
      <MockedProvider
        mocks={mocks}
        addTypename={false}
        defaultOptions={{ watchQuery: { fetchPolicy: 'no-cache' } }}
      >
        <Todos />
      </MockedProvider>
    )
  )

  it("matches snapshot with loading", () => {
    const mocks = [{
      request: {
        query: ALL_TODOS,
      },
    }];
    const component = getComponent(mocks)

    expect(component).toMatchSnapshot()
  });

  it("matches snapshot with error", async () => {
    const mocks = [{
      request: {
        query: ALL_TODOS,
      },
      error: new Error('An error occurred'),
    }];

    let component
    act(() => component = getComponent(mocks))
    await act(() => wait(0));

    expect(component).toMatchSnapshot()
  });

  it("matches snapshot with data", async () => {
    const mocks = [{
      request: {
        query: ALL_TODOS,
      },
      result: {
        data: {
          allTodos: [{
            completed: true,
            id: '1',
            title: 'title',
            // __typename: "Todo"
          }]
        }
      }
    }];

    let component
    act(() => component = getComponent(mocks))
    await act(() => wait(0));

    expect(component).toMatchSnapshot()
  });
});
