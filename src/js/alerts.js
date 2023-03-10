import Alert from "./Alert.mjs";

const alerts = [
  {'message': 'This is only a test', 'background': 'darkblue', 'color': 'white'}
];

const AlertHandler = new Alert(alerts);
AlertHandler.renderAlerts();