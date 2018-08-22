import {css} from 'react-emotion'

export const tableStyle = () => css`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
`

export const tableHeadStyle = () => css`
  & td {
    text-transform: uppercase;
    font-size: 12px;
    font-family: 'Rational-Medium';
    font-weight: 500;
    color: #adadad;
  }
`

export const tableRowStyle = () => css`
  height: 30px;
  outline: none;
  vertical-align: middle;
  transition: box-shadow 0.2s linear;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 5px 0 rgba(50, 40, 40, 0.06);

    & > * {
      font-weight: 500;

      &:first-child {
        border-left-color: #d8d8d8;
      }

      &:last-child {
        border-right-color: #d8d8d8;
      }
    }
  }
`

export const tableCellStyle = ({numeric = false}) => css`
  text-align: ${numeric ? 'right' : 'left'};
  padding: 10px 20px;
  color: #322828;
  font-family: 'Rational-Light';
  font-size: 14px;
  font-weight: 300;
  border: 1px solid transparent;
  border-bottom: 1px solid #d8d8d8;
`

export const arrowStyle = ({direction}) => css`
  display: inline-block;
  vertical-align: top;
  margin-top: 2px;
  margin-left: 7px;
  transform: ${direction === 'asc' && 'rotate(180deg)'};
`

export const tableSortLabelStyle = () => css`
  &:hover {
    cursor: pointer;
  }
`