// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project e8637dcc282c405e "DaVinci Watches - Finale", do not edit manually */
"use client";
import {
  className as className3,
  css as css3,
  fonts as fonts3
} from "./chunks/chunk-U5BBRWIW.js";
import {
  className as className2,
  css as css2,
  fonts as fonts2
} from "./chunks/chunk-SYLPRKFZ.js";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-QCFKN5BM.js";

// virtual:nav-open-links
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framer.com/m/Nav-Open-Links-TRR3.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, cx, getFontsFromSharedStyle, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var RichTextWithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(RichText));
var serializationHash = "framer-03xRp";
var variantClassNames = { Rk9iSiRbs: "framer-v-1hgqb2n" };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var transition2 = { damping: 120, delay: 0, mass: 1, stiffness: 400, type: "spring" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transformPerspective: 1200, transition: transition2, x: 0, y: 0 };
var animation1 = { opacity: 1e-3, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transformPerspective: 1200, x: 150, y: 0 };
var transition3 = { damping: 120, delay: 0.2, mass: 1, stiffness: 400, type: "spring" };
var animation2 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transformPerspective: 1200, transition: transition3, x: 0, y: 0 };
var transition4 = { damping: 120, delay: 0.3, mass: 1, stiffness: 400, type: "spring" };
var animation3 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transformPerspective: 1200, transition: transition4, x: 0, y: 0 };
var transition5 = { damping: 120, delay: 0.7, mass: 1, stiffness: 400, type: "spring" };
var animation4 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transformPerspective: 1200, transition: transition5, x: 0, y: 0 };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className4, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "Rk9iSiRbs", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className3, className2, className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1hgqb2n", className4, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Rk9iSiRbs", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsxs(motion.div, { className: "framer-gzr7vy", "data-framer-name": "Nav Links", layoutDependency, layoutId: "sB_m4wJId", children: [/* @__PURE__ */ _jsx(RichTextWithFXWithOptimizedAppearEffect, { __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1xt6voi", "data-styles-preset": "cyRdZEBqF", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: "Accueil" }) }), className: "framer-1mmxh9r", "data-framer-appear-id": "1mmxh9r", "data-framer-name": "Home", fonts: ["Inter"], initial: animation1, layoutDependency, layoutId: "cOoPn_gCD", optimized: true, style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", transformPerspective: 1200 }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichTextWithFXWithOptimizedAppearEffect, { __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation2, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1xt6voi", "data-styles-preset": "cyRdZEBqF", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: /* @__PURE__ */ _jsx(Link, { href: { webPageId: "Xzx1dk12F" }, motionChild: true, nodeId: "qmTe78a1a", openInNewTab: false, relValues: [], scopeId: "yW73a759m", smoothScroll: false, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-irbsa6", "data-styles-preset": "A9rdXSvQ3", children: "L'Atelier" }) }) }) }), className: "framer-15w3h6x", "data-framer-appear-id": "15w3h6x", "data-framer-name": "Our Hotel", fonts: ["Inter"], initial: animation1, layoutDependency, layoutId: "qmTe78a1a", optimized: true, style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", transformPerspective: 1200 }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichTextWithFXWithOptimizedAppearEffect, { __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation3, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1xt6voi", "data-styles-preset": "cyRdZEBqF", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: /* @__PURE__ */ _jsx(Link, { href: "https://www.chrono24.fr/search/index.htm?customerId=19603&dosearch=true", motionChild: true, nodeId: "jOHkumZ79", openInNewTab: true, relValues: [], scopeId: "yW73a759m", smoothScroll: false, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-irbsa6", "data-styles-preset": "A9rdXSvQ3", children: "Achat" }) }) }) }), className: "framer-1tcp9fh", "data-framer-appear-id": "1tcp9fh", "data-framer-name": "Rooms", fonts: ["Inter"], initial: animation1, layoutDependency, layoutId: "jOHkumZ79", optimized: true, style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", transformPerspective: 1200 }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichTextWithFXWithOptimizedAppearEffect, { __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation3, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1xt6voi", "data-styles-preset": "cyRdZEBqF", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: /* @__PURE__ */ _jsx(Link, { href: { webPageId: "ABs8A7Jd4" }, motionChild: true, nodeId: "hZlsWkGjY", openInNewTab: false, relValues: [], scopeId: "yW73a759m", smoothScroll: false, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-irbsa6", "data-styles-preset": "A9rdXSvQ3", children: "Vente" }) }) }) }), className: "framer-19bvxls", "data-framer-appear-id": "19bvxls", "data-framer-name": "Rooms", fonts: ["Inter"], initial: animation1, layoutDependency, layoutId: "hZlsWkGjY", optimized: true, style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", transformPerspective: 1200 }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichTextWithFXWithOptimizedAppearEffect, { __fromCanvasComponent: true, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation4, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1xt6voi", "data-styles-preset": "cyRdZEBqF", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: /* @__PURE__ */ _jsx(Link, { href: { webPageId: "w6N05sxE8" }, motionChild: true, nodeId: "YilvxnLNk", openInNewTab: false, relValues: [], scopeId: "yW73a759m", smoothScroll: false, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-irbsa6", "data-styles-preset": "A9rdXSvQ3", children: "Contact" }) }) }) }), className: "framer-wbi7ja", "data-framer-appear-id": "wbi7ja", "data-framer-name": "Contact", fonts: ["Inter"], initial: animation1, layoutDependency, layoutId: "YilvxnLNk", optimized: true, style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", transformPerspective: 1200 }, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-u9wdcy", "data-framer-name": "Social Links", layoutDependency, layoutId: "PCMxuY4hI", children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1er78qb", "data-styles-preset": "d0WA5d5b_", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: /* @__PURE__ */ _jsx(Link, { href: "https://www.instagram.com/davinciwatchesparis/?hl=fr", motionChild: true, nodeId: "aIxUhhnLd", openInNewTab: true, relValues: [], scopeId: "yW73a759m", smoothScroll: false, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-irbsa6", "data-styles-preset": "A9rdXSvQ3", children: "Instagram" }) }) }) }), className: "framer-qhwucd", "data-framer-name": "Instagram", fonts: ["Inter"], layoutDependency, layoutId: "aIxUhhnLd", style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1er78qb", "data-styles-preset": "d0WA5d5b_", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: /* @__PURE__ */ _jsx(Link, { href: "https://www.tiktok.com/@da.vinci.watches", motionChild: true, nodeId: "pdZqZ84pT", openInNewTab: true, relValues: [], scopeId: "yW73a759m", smoothScroll: false, children: /* @__PURE__ */ _jsx(motion.a, { className: "framer-styles-preset-irbsa6", "data-styles-preset": "A9rdXSvQ3", children: "Tiktok" }) }) }) }), className: "framer-vovvl9", "data-framer-name": "Instagram", fonts: ["Inter"], layoutDependency, layoutId: "pdZqZ84pT", style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true })] })] }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-03xRp.framer-1h2gvhs, .framer-03xRp .framer-1h2gvhs { display: block; }", ".framer-03xRp.framer-1hgqb2n { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-03xRp .framer-gzr7vy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-03xRp .framer-1mmxh9r, .framer-03xRp .framer-15w3h6x, .framer-03xRp .framer-1tcp9fh, .framer-03xRp .framer-19bvxls, .framer-03xRp .framer-wbi7ja, .framer-03xRp .framer-qhwucd, .framer-03xRp .framer-vovvl9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-03xRp .framer-u9wdcy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ...css3, ...css2, ...css];
var FrameryW73a759m = withCSS(Component, css4, "framer-03xRp");
var stdin_default = FrameryW73a759m;
FrameryW73a759m.displayName = "Nav Open Links";
FrameryW73a759m.defaultProps = { height: 475, width: 151.5 };
addFonts(FrameryW73a759m, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:nav-open-links
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "ABs8A7Jd4": { "path": "/vente" }, "HqqUpNGKj": { "path": "/" }, "X4ktpndPG": { "path": "/404" }, "Xzx1dk12F": { "path": "/latelier" }, "w6N05sxE8": { "path": "/contact" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "e8637dcc282c405e8332e4eab2cb458a196f99fcac27567df85b0de9996f5033",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "ABs8A7Jd4": {
          "path": "/vente"
        },
        "HqqUpNGKj": {
          "path": "/"
        },
        "X4ktpndPG": {
          "path": "/404"
        },
        "Xzx1dk12F": {
          "path": "/latelier"
        },
        "w6N05sxE8": {
          "path": "/contact"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "e8637dcc282c405e8332e4eab2cb458a196f99fcac27567df85b0de9996f5033",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
