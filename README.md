# simpleCheck
simpleCheck is a jQuery plugin for checkboxes, radios and switches. Easy to use with existing jQuery code.
![alt text](https://raw.githubusercontent.com/xAzzzu/simpleCheck/master/demo.png)
### Usage
init Checkbox
```javascript
$('input[type=checkbox]').simpleCheck('init');
```
init Radio
```javascript
$('input[type=radio]').simpleCheck('init');
```
init Switch
```javascript
var switchSettings = {
    isSwitch: true
};

$('input[type=checkbox]').simpleCheck(switchSettings);
```
#### Disable/Enable Input
```javascript
$('input[type=checkbox]').simpleCheck('disable'); //Disable
$('input[type=checkbox]').simpleCheck('enable'); //Enable
```
or normal jQuery
```javascript
$('input[type=checkbox]').prop('disabled', true); //Disable
$('input[type=checkbox]').prop('disabled', false); //Enable

$('input[type=checkbox]').attr('disabled', true); //Disable
$('input[type=checkbox]').attr('disabled', false); //Enable
```
#### Check/Uncheck Input
```javascript
$('input[type=checkbox]').simpleCheck('uncheck'); //Uncheck
$('input[type=checkbox]').simpleCheck('check'); //Check
```
or normal jQuery
```javascript
$('input[type=checkbox]').prop('checked', false); //Uncheck
$('input[type=checkbox]').prop('checked', true); //Check

$('input[type=checkbox]').attr('checked', false); //Uncheck
$('input[type=checkbox]').attr('checked', true); //Check
```
#### Available Settings
```javascript
var defaultSettings = {
    theme: 'light', /* 'light' or 'dark' */
    isSwitch: false, /* is a switch or not (only a checkbox can be a switch)*/
    checkbox: {
        defaultClass: 'simpleCheck', /* Default class for checkbox */
        checkedClass: 'simpleCheck-checked', /* Checked class for checkbox */
        disabledClass: 'simpleCheck-disabled' /* Disabled class for checkbox */
    },
    radio: {
        defaultClass: 'simpleCheck', /* Default class for radio */
        radioClass: 'radio', /*Radio button class*/
        checkedClass: 'simpleCheck-checked', /* Checked class for radio */
        disabledClass: 'simpleCheck-disabled' /* Disabled class for radio */
    },
    switch: {
        defaultClass: 'simpleCheck', /* Default class for switch */
        switchClass: 'switch', /* Switch class */
        checkedClass: 'simpleCheck-checked', /* Checked class for switch */
        disabledClass: 'simpleCheck-disabled' /* Disabled class for switch */
    }
};
```
### Events
##### simpleCheckStateChanged
Triggered when the check state of a checkbox, radio or switch is changed.

##### simpleEnableStateChanged
Triggered when the check state of a checkbox, radio or switch is changed.

##### simpleChecked
Triggered when the check state of a checkbox, radio or switch is changed.

##### simpleUnchecked
Triggered when the check state of a checkbox, radio or switch is changed.

##### simpleEnabled
Triggered when the check state of a checkbox, radio or switch is changed.

##### simpleDisabled
Triggered when the check state of a checkbox, radio or switch is changed.



