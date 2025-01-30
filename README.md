Counter App - MVI & MVVM Architecture in React
 # Overview
This Counter App is implemented using MVI (Model-View-Intent) and MVVM (Model-View-ViewModel) architecture patterns in a React app. The app allows users to interact with a counter via buttons to increase, decrease, reset the count, and toggle the Auto Increment feature. When enabled, the counter automatically increments every 1.1 seconds.

# Features
Increase the count (+): Increases the counter by 1.
Decrease the count (-): Decreases the counter by 1.
Reset the count: Resets the counter back to 0.
Auto Increment: Automatically increases the count by 1 every 1.1 seconds when enabled.
Bounded Range: The counter value will never go below 0 or exceed 98.
Toggle Auto Increment: When disabled, the automatic count increase stops.
Architecture
Model-View-Intent (MVI)
In this pattern, the app will be divided into:

Model: Represents the current state of the counter.
View: The UI layer that renders the state and sends user intents (such as button presses).
Intent: Represents the user actions that will trigger changes in the app's state.
The flow of data in MVI will look like this:

View emits user actions (e.g., clicking buttons).
Intent translates those actions into events and passes them to the ViewModel.
ViewModel processes those intents and updates the Model, which is then reflected in the View.
Model-View-ViewModel (MVVM)
MVVM separates the logic into:

Model: Manages the app's state and business logic.
ViewModel: Acts as a mediator between the view and the model, providing an abstraction of the model to the view.
View: The React component that observes the ViewModel and renders the UI.
Reactive Programming (RxJS / React Hooks)
This app uses RxJS or React hooks for managing state changes and handling asynchronous operations like the Auto Increment feature.
