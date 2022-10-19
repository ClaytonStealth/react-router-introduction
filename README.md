## React-Router-Tutorial Day 2

- A layout is a term for a page view container that displays other pages within it. I.E. A layout is normally the part of the page that remains the same for every page of the application such as the navigation bar.
- The <> and </> tag are known as React.Fragments. They are simple placeholder tags that do not render any html to the page. They are simply used as container tags for a react component because react requires enclosing tags in the return statement.
- For route paths, you can have a route param that acts as a variable by including a : after the / and before the variable name.
- In order to nest a route/element inside of another route/element, we use the children property on the route object. Any child route element will be rendered WITHIN the element of the parent route.
- The <Outlet/> component from react-router is used to render child elements to the page. When a route that has a child element resolves, the parent element will be rendered to the page first and the child element will be rendered in the place of the <Outlet/> componenet. I.E. In order for a parent element to render a child element, we need to include the <Outlet/> component so that <Outlet/> will be replaced by the child element. <Outlet/> can go anywhere on the page, usually it is placed beneath the Layout UI.
- <Outlet/> is capable of passing variables (such as state variables) from the parent to the child through the context prop. The context prop takes an array as the value and the array can be accessed on the child component using the useOutletContext hook.
