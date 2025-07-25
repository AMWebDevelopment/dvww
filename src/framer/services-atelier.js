// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project e8637dcc282c405e "DaVinci Watches - Finale", do not edit manually */
"use client";
import {
  Ticker
} from "./chunks/chunk-J7DGUYK7.js";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-4AVHMOYA.js";

// virtual:services-atelier
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framer.com/m/ServicesAtelier-JZWf.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, ControlType, cx, getFonts, getFontsFromSharedStyle, Image, RichText, SmartComponentScopedContainer, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var TickerFonts = getFonts(Ticker);
var SmartComponentScopedContainerWithFX = withFX(SmartComponentScopedContainer);
var cycleOrder = ["nsWXltidA", "FLpHxpW1J", "ok1U1DNls", "NZe3QN8kN"];
var serializationHash = "framer-xKQrN";
var variantClassNames = { FLpHxpW1J: "framer-v-il2v1n", nsWXltidA: "framer-v-1c1h9wr", NZe3QN8kN: "framer-v-1x2csyr", ok1U1DNls: "framer-v-1pseh92" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 150 };
var transition2 = { damping: 50, delay: 0, mass: 1, stiffness: 100, type: "spring" };
var animation1 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 150 };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { Desktop: "nsWXltidA", Laptop: "FLpHxpW1J", Phone: "NZe3QN8kN", Tablet: "ok1U1DNls" };
var getProps = ({ etancheite, height, id, nettoyage, pile, polissage, title, width, ...props }) => {
  return { ...props, qaXPm5TwK: polissage ?? props.qaXPm5TwK ?? { alt: "Night Event", pixelHeight: 621, pixelWidth: 400, src: "https://framerusercontent.com/images/ePQ1vvWFbYXzS8zrXbX4iXgRB0.png", srcSet: "https://framerusercontent.com/images/ePQ1vvWFbYXzS8zrXbX4iXgRB0.png 400w" }, UO2lrogJX: etancheite ?? props.UO2lrogJX ?? { alt: "Luxurious Room", pixelHeight: 621, pixelWidth: 400, src: "https://framerusercontent.com/images/VPR9ehCYTbLucXgbCpqtpuErfDo.png", srcSet: "https://framerusercontent.com/images/VPR9ehCYTbLucXgbCpqtpuErfDo.png 400w" }, v9YZ1B5gN: nettoyage ?? props.v9YZ1B5gN ?? { alt: "Pool", pixelHeight: 621, pixelWidth: 400, src: "https://framerusercontent.com/images/gwI3hLQSUBni1MxyI2vVrLRi4PM.png", srcSet: "https://framerusercontent.com/images/gwI3hLQSUBni1MxyI2vVrLRi4PM.png 400w" }, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "nsWXltidA", Y5Etaowlk: pile ?? props.Y5Etaowlk ?? { alt: "Restaurant", pixelHeight: 621, pixelWidth: 400, src: "https://framerusercontent.com/images/RhPn0YCfLhY36MFOWTj0wIQhlgA.png", srcSet: "https://framerusercontent.com/images/RhPn0YCfLhY36MFOWTj0wIQhlgA.png 400w" }, ySOtZkVdp: title ?? props.ySOtZkVdp ?? "Les services propos\xE9s par l'Atelier" };
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
  const { style, className: className2, layoutId, variant, UO2lrogJX, Y5Etaowlk, v9YZ1B5gN, qaXPm5TwK, ySOtZkVdp, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "nsWXltidA", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.section, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1c1h9wr", className2, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "nsWXltidA", ref: refBinding, style: { backgroundColor: "var(--token-3399e391-f9d3-4781-bcc9-e38e7cf0c7f5, rgb(249, 253, 254))", ...style }, ...addPropertyOverrides({ FLpHxpW1J: { "data-framer-name": "Laptop" }, NZe3QN8kN: { "data-framer-name": "Phone" }, ok1U1DNls: { "data-framer-name": "Tablet" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-17m78p6", "data-framer-name": "Container", layoutDependency, layoutId: "vrsqFLr2D", children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-177eqmu", layoutDependency, layoutId: "LA6Gz2r4_", children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h2, { className: "framer-styles-preset-onq7jl", "data-styles-preset": "xJ2wgdMZ0", children: "Les services propos\xE9s par l'Atelier" }) }), className: "framer-kkstmz", "data-framer-name": "Heading", fonts: ["Inter"], layoutDependency, layoutId: "EqKXRHuWE", style: { "--framer-paragraph-spacing": "0px" }, text: ySOtZkVdp, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(SmartComponentScopedContainerWithFX, { __framer__animate: { transition: transition2 }, __framer__animateOnce: true, __framer__enter: animation, __framer__exit: animation1, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-4j9vpc-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "FHQs9F4JB-container", nodeId: "FHQs9F4JB", rendersWithMotion: true, scopeId: "iZierh5oj", children: /* @__PURE__ */ _jsx(Ticker, { alignment: "center", direction: "left", fadeOptions: { fadeAlpha: 0, fadeContent: false, fadeInset: 0, fadeWidth: 25, overflow: true }, gap: 32, height: "100%", hoverFactor: 1, id: "FHQs9F4JB", layoutId: "FHQs9F4JB", padding: 0, paddingBottom: 0, paddingLeft: 0, paddingPerSide: false, paddingRight: 0, paddingTop: 0, sizingOptions: { heightType: false, widthType: true }, slots: [/* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", pixelHeight: 621, pixelWidth: 400, sizes: "400px", ...toResponsiveImage(qaXPm5TwK) }, className: "framer-b0mpc8", "data-framer-name": "Facility Card", layoutDependency, layoutId: "mVD7_iXGy", children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-12mv1ha", layoutDependency, layoutId: "Bb4A7f7_b", children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SGVkdmlnIExldHRlcnMgU2Fucy1yZWd1bGFy", "--framer-font-family": '"Hedvig Letters Sans", "Hedvig Letters Sans Placeholder", sans-serif', "--framer-line-height": "1.6em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: "Polissage" }) }), className: "framer-ckxxhm", fonts: ["GF;Hedvig Letters Sans-regular"], layoutDependency, layoutId: "WB3O3Gl9n", style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }) }) }), /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", pixelHeight: 621, pixelWidth: 400, sizes: "400px", ...toResponsiveImage(v9YZ1B5gN) }, className: "framer-13exm8s", "data-framer-name": "Facility Card", layoutDependency, layoutId: "yUuy32PJh", children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-uz5xw8", layoutDependency, layoutId: "v2Hz7DUIn", children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SGVkdmlnIExldHRlcnMgU2Fucy1yZWd1bGFy", "--framer-font-family": '"Hedvig Letters Sans", "Hedvig Letters Sans Placeholder", sans-serif', "--framer-line-height": "1.6em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: "Nettoyage et r\xE9vision" }) }), className: "framer-1ds3tdr", fonts: ["GF;Hedvig Letters Sans-regular"], layoutDependency, layoutId: "ZFSbz8HQd", style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }) }) }), /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", pixelHeight: 621, pixelWidth: 400, sizes: "400px", ...toResponsiveImage(UO2lrogJX) }, className: "framer-15j5hji", "data-framer-name": "Facility Card", layoutDependency, layoutId: "RKrEU8Y6O", children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1rrdxob", layoutDependency, layoutId: "kmtCNtaaZ", children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SGVkdmlnIExldHRlcnMgU2Fucy1yZWd1bGFy", "--framer-font-family": '"Hedvig Letters Sans", "Hedvig Letters Sans Placeholder", sans-serif', "--framer-line-height": "1.6em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: "\xC9tanch\xE9it\xE9" }) }), className: "framer-tjozbr", fonts: ["GF;Hedvig Letters Sans-regular"], layoutDependency, layoutId: "pXnoy7Udg", style: { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }) }) }), /* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", pixelHeight: 621, pixelWidth: 400, sizes: "400px", ...toResponsiveImage(Y5Etaowlk) }, className: "framer-1p58rvt", "data-framer-name": "Facility Card", layoutDependency, layoutId: "Qtspzu7po", children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-1l495px", layoutDependency, layoutId: "PSvIcbscW", children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SGVkdmlnIExldHRlcnMgU2Fucy1yZWd1bGFy", "--framer-font-family": '"Hedvig Letters Sans", "Hedvig Letters Sans Placeholder", sans-serif', "--framer-line-height": "1.6em", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Changement de pile" }) }), className: "framer-1uy95pb", fonts: ["GF;Hedvig Letters Sans-regular"], layoutDependency, layoutId: "hDy6IKZYh", style: { "--extracted-r6o4lv": "rgb(255, 255, 255)", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true }) }) })], speed: 40, style: { height: "100%", maxWidth: "100%", width: "100%" }, width: "100%" }) }) })] }) }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-xKQrN.framer-1jrrmaf, .framer-xKQrN .framer-1jrrmaf { display: block; }", ".framer-xKQrN.framer-1c1h9wr { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 35px 64px 35px 64px; position: relative; width: 1560px; }", ".framer-xKQrN .framer-17m78p6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1640px; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-xKQrN .framer-177eqmu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-xKQrN .framer-kkstmz { flex: none; height: auto; max-width: 57%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-xKQrN .framer-4j9vpc-container { flex: none; height: 680px; max-width: 1640px; position: relative; width: 1432px; }", ".framer-xKQrN .framer-b0mpc8, .framer-xKQrN .framer-13exm8s, .framer-xKQrN .framer-15j5hji, .framer-xKQrN .framer-1p58rvt { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 620px; justify-content: flex-end; overflow: visible; padding: 32px; position: relative; width: 400px; }", ".framer-xKQrN .framer-12mv1ha, .framer-xKQrN .framer-uz5xw8, .framer-xKQrN .framer-1rrdxob, .framer-xKQrN .framer-1l495px { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-xKQrN .framer-ckxxhm, .framer-xKQrN .framer-1ds3tdr, .framer-xKQrN .framer-tjozbr, .framer-xKQrN .framer-1uy95pb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-xKQrN.framer-v-il2v1n.framer-1c1h9wr { width: 1200px; }", ".framer-xKQrN.framer-v-1pseh92.framer-1c1h9wr { padding: 35px 40px 35px 40px; width: 810px; }", ".framer-xKQrN.framer-v-1x2csyr.framer-1c1h9wr { padding: 35px 24px 35px 24px; width: 390px; }", ".framer-xKQrN.framer-v-1x2csyr .framer-177eqmu { gap: 64px; }", ...css];
var FrameriZierh5oj = withCSS(Component, css2, "framer-xKQrN");
var stdin_default = FrameriZierh5oj;
FrameriZierh5oj.displayName = "ServicesAtelier";
FrameriZierh5oj.defaultProps = { height: 895, width: 1560 };
addPropertyControls(FrameriZierh5oj, { variant: { options: ["nsWXltidA", "FLpHxpW1J", "ok1U1DNls", "NZe3QN8kN"], optionTitles: ["Desktop", "Laptop", "Tablet", "Phone"], title: "Variant", type: ControlType.Enum }, UO2lrogJX: { __defaultAssetReference: "data:framer/asset-reference,VPR9ehCYTbLucXgbCpqtpuErfDo.png?originalFilename=etanche.png&preferredSize=auto", __vekterDefault: { alt: "Luxurious Room", assetReference: "data:framer/asset-reference,VPR9ehCYTbLucXgbCpqtpuErfDo.png?originalFilename=etanche.png&preferredSize=auto" }, title: "Etancheite", type: ControlType.ResponsiveImage }, Y5Etaowlk: { __defaultAssetReference: "data:framer/asset-reference,RhPn0YCfLhY36MFOWTj0wIQhlgA.png?originalFilename=pile.png&preferredSize=auto", __vekterDefault: { alt: "Restaurant", assetReference: "data:framer/asset-reference,RhPn0YCfLhY36MFOWTj0wIQhlgA.png?originalFilename=pile.png&preferredSize=auto" }, title: "Pile", type: ControlType.ResponsiveImage }, v9YZ1B5gN: { __defaultAssetReference: "data:framer/asset-reference,gwI3hLQSUBni1MxyI2vVrLRi4PM.png?originalFilename=nettoyage.png&preferredSize=auto", __vekterDefault: { alt: "Pool", assetReference: "data:framer/asset-reference,gwI3hLQSUBni1MxyI2vVrLRi4PM.png?originalFilename=nettoyage.png&preferredSize=auto" }, title: "Nettoyage", type: ControlType.ResponsiveImage }, qaXPm5TwK: { __defaultAssetReference: "data:framer/asset-reference,ePQ1vvWFbYXzS8zrXbX4iXgRB0.png?originalFilename=Group+6.png&preferredSize=auto", __vekterDefault: { alt: "Night Event", assetReference: "data:framer/asset-reference,ePQ1vvWFbYXzS8zrXbX4iXgRB0.png?originalFilename=Group+6.png&preferredSize=auto" }, title: "Polissage", type: ControlType.ResponsiveImage }, ySOtZkVdp: { defaultValue: "Les services propos\xE9s par l'Atelier", displayTextArea: false, title: "Title", type: ControlType.String } });
addFonts(FrameriZierh5oj, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { family: "Hedvig Letters Sans", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/hedvigletterssans/v2/CHy_V_PfGVjobSBkihHWDT98RVp37w8jQJhN3Twgi1w.woff2", weight: "400" }] }, ...TickerFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:services-atelier
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "NZe3QN8kN",
  "md": "ok1U1DNls",
  "xl": "FLpHxpW1J",
  "2xl": "nsWXltidA"
};
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
