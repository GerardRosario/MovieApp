# MovieApp

> Project 2: Seenema
> 
> Project Link: https://expo.io/@gerardrosario/projects/MovieApp
> 
> Project Link2: https://expo.io/--/to-exp/exp%3A%2F%2F192.168.0.3%3A19000

# Pages of Project

App.js -> HomeScreen -> SearchScreen -> DetailScreen

App.js

Calls all the screens and displays them in the application when they are navigated to.

![Screenshot_20211020-182619_Expo Go](https://user-images.githubusercontent.com/55461102/138196771-4d7fe80e-0572-4ea1-a035-70690a572a36.jpg)

# HomeScreen

Not much in this page, it's just a landing page with the title of the application, which is Seenema and a logo created from an adobe stock image.
There is also a button below the logo that navigates to the search page and below that is a description of what the project.


# SearchScreen

The Search screen is the screen that allows an individual to search for movies or tv series and scroll through the results that were fetched from the OMDB API.
This screen was implemented with the s parameter api call, which takes in a word to search for, and then saves the results to an empty array in state.
The search happens in an inputbox which changes the search parameter of the api call, resets the page number back to 1, and emptiues out the array.
All of those were necessary to do, so that no residual information is seen when new searches are done. The api call is then saved and called in a flatlist.
This flatlist spits out the image of as specific movies/tv series, its title, and the year of its release. All of this is wrapped in a touchableopacity
which creates a clickable element for an individual. A common bug that kept triggering during testing was that moving to other results
would sometimes trigger twice, skipping some pages all together. This was pacthed with the onMomentumScrollBegin parameter.

The given challenge for this project was a way to navigate between results. In order to navigate toward more results pagination was implemented
and a page state was created to keep track of the api's current page location. When moving to a new page, the page state was incremented and
the api fetch was called to update the results shown by the app. To navigate back to previous results the pull to refresh was implemneted, basically
everytime an individual moves to the top of the page and pulls the page down, the page state would be decremented and the api fetch was called to
update the results back to the previous page. The id for the results are based on the imdbID returned by the api fetch for each specific title.
In order to pass this unique imdbID the ID was passed as a prop during the navigation step.



# DetailScreen

The unique imdbID is taken as a prop, referenced in a variable, and is then passed to an api fetch function. This api fetch function uses the i 
parameter which uses the imdbID of a title and uses that to return more specific details about that title. Once the i parameter api call is made, 
the results are then saved into an array to be called.

Once the details of a specific movie are saved they are called in the renderer and displayed using a scrollview. The rendered details in the first 
square are an image of the title, the title itself, the year of its release, its duration in minutes, and a plot summary. The next card displays
the genres of the movie. Below that a short lsit of actors from the mvoie is displayed. Finally, the last square display 
the metascore and imdbrating of the movie.


# Bugs / Issues
- This seems to be a problem with the API itself, but some searches will yield duplicate results. For example searching 'Star' amd navigating to page 4
will show "Star Trek Picard" twice. In the app a duplicate of the series is seen below the primary copy. Searching 'Stranger things' will show a similar
issue on the first page, where "Beyond Stranger Things" is displayed twice. This will trigger a yellow warning about objects needing to have a unique
id. On rarer occasions the duplciates will stay on screen even when the array containing the api details get reset. Or even when a new search is
started.

- On first launch of the app, it may reset back to the homepage immedietaly or after navigating to the seacrh screen, no yellow or red warnigs 
are triggered so I don't know what that's about. Just waiting and/or reloading the app will stabilize it.

- Sometimes running the app will also trigger a red warning about boolean, but it doesn't happen all the time and after updating the expo app,
it has hardly happened again. if it does happen just dsimissing the warnign and reloading will stabilize the app.

- Initial implementations of the pagination triggered twice, patching of this issue resulted in the inability to instantly navigating between results.
Essentially to move to more results or to move to previous results, an individual has to move the scroll bar slightly up and down in order to be able
to navigate forward or backward.
