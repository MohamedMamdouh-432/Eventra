export const spaces = {
    xxs: "0.03125rem", // 0.5px
    xxs2: "0.0625rem", // 1px
    xs: "0.125rem", //2px
    xs2: "0.25rem", //4px
    xs3: "0.375rem", //6px
    xs4: "0.5rem", //8px
    xs5: "0.625rem", //10px
    sm: "0.75rem", //12px
    sm1: "0.875rem", //14px
    md: "1rem", //16px
    md1: "1.125rem", //18px
    md2: "1.25rem", //20px
    lg: "1.5rem", //24px
    xl: "2rem", //32px
    xl2: "2.25rem", //36px
    xl3: "2.5rem", //40px
    xl4: "3rem", //48px
    xl5: "3.5rem", //56px
    xl6: "4rem", //64px
    xl7: "4.5rem", //72px
    xl8: "5rem", //80px
} as const;

export const borderRadius = {
    xxxs: "0.5px",
    xxs: "1px",
    xs: `2px`,
    xs2: `4px`,
    xs3: `8px`,
    sm: `12px`,
    md: `16px`,
    lg: `24px`,
    xl: `32px`,
    xl2: `40px`,
    xl3: `45px`,
    xl4: "50px",
} as const;

export const elevations = {
    xs: `0px 4px 40px 0px rgba(4, 6, 15, 0.05)`,
    sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    md: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    lg: "0px 1px 3px 0px rgba(146, 146, 146, 0.30), 0px 4px 8px 3px rgba(166, 166, 166, 0.15)",
    xl: "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
    xl2: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
} as const;

export const breakPoints = {
    desktop: "1200px",
    mobile: "0px",
    tablet: "768px",
    largeDesktop: "1440px",
} as const;
