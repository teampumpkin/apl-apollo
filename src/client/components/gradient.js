export const getGradient = (color) => {
    switch (color) {
        case '#016F74':
            return {
                background: `-webkit-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `-o-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `-ms-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `-moz-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `linear-gradient(to bottom, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                borderColor: "#F5863F"
            }
        case "#727903":
            return {
                background: `-webkit-linear-gradient(top, rgb(163, 171, 29) 0%, rgb(186, 196, 12) 100%)`,
                background: `-o-linear-gradient(top, rgb(163, 171, 29) 0%, rgb(186, 196, 12) 100%)`,
                background: `-ms-linear-gradient(top, rgb(163, 171, 29) 0%, rgb(186, 196, 12) 100%)`,
                background: `-moz-linear-gradient(top, rgb(163, 171, 29) 0%, rgb(186, 196, 12) 100%)`,
                background: `linear-gradient(to bottom, rgb(163, 171, 29) 0%, rgb(186, 196, 12) 100%)`,
                borderColor:"#00A7B0"
            }
        case "#EF6A15":
            return {
                background: `-webkit-linear-gradient(top, rgb(254, 135, 58) 0%, rgb(250, 150, 87) 100%)`,
                background: `-o-linear-gradient(top, rgb(254, 135, 58) 0%, rgb(250, 150, 87) 100%)`,
                background: `-ms-linear-gradient(top, rgb(254, 135, 58) 0%, rgb(250, 150, 87) 100%)`,
                background: `-moz-linear-gradient(top, rgb(254, 135, 58) 0%, rgb(250, 150, 87) 100%)`,
                background: `linear-gradient(to bottom, rgb(254, 135, 58) 0%, rgb(250, 150, 87) 100%)`,
                borderColor:"#00ACB6"
            }
        default:
            return {
                background: `-webkit-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `-o-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `-ms-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `-moz-linear-gradient(top, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                background: `linear-gradient(to bottom, rgb(0, 171, 181) 0%, rgb(0, 124, 132) 82%, rgb(0, 114, 121) 100%)`,
                borderColor: "#F5863F"
            }
    }
}