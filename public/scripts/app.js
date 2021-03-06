"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "indecision"
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

var Action = function Action(props) {
    return React.createElement(
        "button",
        { onClick: props.handlePick, disabled: !props.hasOptions },
        "What should I do?"
    );
};

// class Action extends React.Component {
//     render() {
//         return (
//             <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
//         );
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove all"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Please add an option to get started!"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption });
        })
    );
};

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 <p>options component here</p>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            " Remove"
        )
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <p>{this.props.optionText}</p>
//         );
//     }
// }

var AddOption = function (_React$Component) {
    _inherits(AddOption, _React$Component);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            error: undefined
        };
        return _this;
    }

    _createClass(AddOption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option); // this is not the right way to use a func named like this

            this.setState(function () {
                return { error: error };
            }); // using the return opject shorthand in arrow functions

            if (!error) {
                e.target.elements.option.value = "";
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "h3",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "addOption"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
    _inherits(IndecisionApp, _React$Component2);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this2.state = {
            options: _this2.props.options
        };
        _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
        _this2.handlePick = _this2.handlePick.bind(_this2);
        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
        return _this2;
    }

    // when renders


    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            // trycatch because JSON.parse() will throw an error if json is not in valid format for any reason
            try {
                var json = localStorage.options;
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (error) {
                // do nothing
            }
        }

        // when state or props change

    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
            // this.setState(() => {
            //     return {
            //         options: []
            //     }
            // });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToDelete) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToDelete;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            // form validation
            if (!option) {
                return "enter a valid option";
            } else if (this.state.options.indexOf(option) > -1) {
                return "this option already exists";
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            }); // shorthand for returning an object
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat(option)
            //     };
            // });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subtitle = "put your life in the hands of blaah";
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
