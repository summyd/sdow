import styled from 'styled-components';

import colors from '../resources/colors.json';

const classNames = {
  input: 'react-autosuggest__input',
  container: 'react-autosuggest__container',
  suggestion: 'react-autosuggest__suggestion',
  suggestion_highlighted: 'react-autosuggest__suggestion--highlighted',
  suggestions_list: 'react-autosuggest__suggestions-list',
  suggestions_container: 'react-autosuggest__suggestions-container',
  suggestions_container_open: 'react-autosuggest__suggestions-container--open',
  input_open: 'react-autosuggest__input--open',
};

export const AutosuggestWrapper = styled.div.attrs(classNames)`
  .${classNames.container} {
    position: relative;
    display: inline;
  }

  .${classNames.suggestion} {
    cursor: pointer;
    border-bottom: solid 1px ${colors.gray};

    &:last-of-type {
      border-bottom: none;

      &.${classNames.suggestion_highlighted} {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
      }
    }
  }

  .${classNames.suggestion_highlighted} {
    background-color: ${colors.gray};
  }

  .${classNames.suggestions_container} {
    display: none;
  }
  
  .${classNames.suggestions_container_open} {
    display: block;
    position: absolute;
    top: 41px;
    width: 500px;
    border: solid 2px ${colors.darkGreen};
    background-color: ${colors.creme};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    z-index: 2;
  }

  .${classNames.suggestions_list} {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .${classNames.input} {
    width: 500px;
    height: 80px;
    border: solid 3px ${colors.darkGreen};
    text-align: center;
    font-size: 40px;
    background-color: ${colors.creme};

    &::-webkit-input-placeholder {
      color: ${colors.darkGreen};
      opacity: 0.5;
      -webkit-transition: opacity 0.35s ease-in-out;
      transition: opacity 0.35s ease-in-out;
    }

    &:hover::-webkit-input-placeholder {
      opacity: 0.75;
    }

    &:focus::-webkit-input-placeholder {
      opacity: 0;
    }
  }

  &.${classNames.input_open} {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
`;
