


import { ThemeConfig } from "antd";

export const defaultData: ThemeConfig = {
  token: {
    colorPrimary: '#0085FF',
  },
  "components": {
    "Button": {
      "controlHeight": 40,
      "paddingInline": 20,
      "contentFontSizeSM": 14,
      "contentFontSizeLG": 22,
      "onlyIconSizeSM": 26,
      "onlyIconSizeLG": 33,
      "motionDurationMid": "0.4s",
      "contentFontSize": 16,

      "paddingContentHorizontalSM": 16,
      "paddingContentVerticalSM": 16,
      "controlHeightSM": 35,
      "borderRadiusSM": 5,
      "colorLinkHover": '#0085FF',

    },
    "Input": {
      "controlHeight": 40,
      "paddingInlineLG": 20,
      "paddingInline": 16
    },
    "Typography": {
      "fontSize": 16,
      "fontSizeHeading1": 40,
      "algorithm": true
    },
    "Cascader": {
      "controlItemWidth": 300,
      "controlWidth": 300,
      "menuPadding": 10,
      "optionPadding": "6px 12px",
      "controlHeight": 37,
      "fontSize": 16,
      "fontSizeLG": 18,
      "controlItemBgActive": "rgb(241, 241, 241)",
      "borderRadiusSM": 8,
      "motionDurationFast": "0.5s",
      "motionDurationMid": "0.5s",
      "motionDurationSlow": "1s",
      "fontWeightStrong": 100,
      'colorSplit': '#E8E8E8',
      'lineWidth': 1,
    },
    "Pagination": {
      "colorBgContainer": "rgb(0, 133, 255)",
      "colorPrimary": "rgb(255, 255, 255)",
      "colorPrimaryHover": "rgb(255, 255, 255)",
      "colorBgTextActive": "rgba(0, 133, 255, 0.15)",
    },
    "Alert": {
      "defaultPadding": "10px",
      "withDescriptionPadding": "10px",
      "colorInfoBorder": "rgb(234, 234, 234)",
      "colorInfoBg": "rgb(245, 245, 245)"
    },
    "Slider": {
      "dotActiveBorderColor": "rgb(0, 133, 255)",
      "handleColor": "rgb(0, 133, 255)",
      "handleActiveColor": "rgb(0, 133, 255)",
      "trackHoverBg": "rgb(0, 133, 255)",
      "trackBg": "rgb(0, 133, 255)",
      "lineWidth": 2,
      "dotBorderColor": "rgb(229, 243, 255)",
      "lineHeight": 2,
      "borderRadiusXS": 5,
      "railBg": "rgb(229, 243, 255)",
      "railHoverBg": "rgb(199, 229, 255)",
      "trackBgDisabled": "rgba(255, 88, 88, 0.04)",
      "colorPrimaryBorder": "rgb(22, 119, 255)",
      "colorPrimaryBorderHover": "rgb(17, 107, 233)"
    },
    "Radio": {
      "buttonSolidCheckedActiveBg": "rgb(0, 133, 255)",
      "padding": 18,
      "controlHeight": 32,
      "dotSize": 8,
      "radioSize": 20
    },

  }
}
