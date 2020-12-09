import MyStatusWithHooks from "./MyStatusWithHooks";
import React from "react";
import {create} from "react-test-renderer"

describe("MyStatusWithHooks Component", () => {
    test(`status from post should be in state`, () => {
        const component = create(<MyStatusWithHooks status = {"test"} />)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("test");
    });
});