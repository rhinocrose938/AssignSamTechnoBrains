USE npm install to install the node modules and npm start to start the development server at localhost.

In this Practical the given API has been used to display the Contact List. As per the given question React-Redux and Redux-persist have been used to manage the central state
of the application and have implemented middleware in redux. Bootstrap CSS library has been used for the UI design.

The Navbar contains the Link to The main page that is Contact List and DropDown Menu which contains the links to sort the contact list in A-Z or Z-A format. The Link to the Favorite List is also displayed in the Navbar.

In the Contact List in each contact card the image of user with email, name and view details is displayed along with pagination with two cards per page. On clicking view details all the specific details of the user are displayed. In the UserDetails page there are two buttons. Add to favorite button adds that user in the Favorite list while Remove Favorites button removes all the favorites from the list.

There is a specific link to the favorite list in the Navbar. And the list in favorite list also contain buttons of view details to see single user details. There is an added feature where in any of the lists of contactlist or favorite list or contactlist A-Z or Z-A by clicking on username we get directed to details of the user which is done using react-router.
