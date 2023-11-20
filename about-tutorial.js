const driver = window.driver.js.driver;

const driverObj = driver({
  showProgress: true,
  steps: [
    // step - BEGIN
    {
      element: ".navbar-brand", //target an element or input #no-element
      popover: {
        title: "Step 1. Page Title",
        description: "Displays the page you are currently on.",
        side: "left", //left | right | top | bottom of the element
        align: "start", //start | center | end
      },
    },
    // step - END
    {
      element: "#available-products",
      popover: {
        title: "Step 2. Available Products",
        description: "Displays a basic table of available properties",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "#no-element",
      popover: {
        title: "Step 3. Tutorial Completed",
        description: "This concludes the walkthrough for the about us page.",
        side: "bottom",
        align: "start",
      },
    },
    //define more steps here
  ],
});

driverObj.drive();
