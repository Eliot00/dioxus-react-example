import { Button, Stack } from '@chakra-ui/react';
var MyApp = function() {
    return(/*#__PURE__*/ React.createElement(Stack, {
        spacing: 4,
        direction: "row",
        align: "center"
    }, /*#__PURE__*/ React.createElement(Button, {
        colorScheme: "teal",
        size: "xs"
    }, "Button"), /*#__PURE__*/ React.createElement(Button, {
        colorScheme: "teal",
        size: "sm"
    }, "Button"), /*#__PURE__*/ React.createElement(Button, {
        colorScheme: "teal",
        size: "md"
    }, "Button"), /*#__PURE__*/ React.createElement(Button, {
        colorScheme: "teal",
        size: "lg"
    }, "Button")));
};
export default MyApp;
