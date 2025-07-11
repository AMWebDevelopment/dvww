// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project e8637dcc282c405e "DaVinci Watches - Finale", do not edit manually */
"use client";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-PLG5VZTK.js";
import {
  className as className2,
  css as css2,
  fonts as fonts2
} from "./chunks/chunk-QCFKN5BM.js";

// virtual:Erreur
import { Fragment as Fragment3 } from "react";
import { ContextProviders } from "unframer";

// /:https://framer.com/m/Erreur-IVOy.js
import { jsx as _jsx2, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx as cx2, getFonts, getFontsFromSharedStyle as getFontsFromSharedStyle2, ResolveLinks, RichText as RichText2, SmartComponentScopedContainer, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useRouter, useVariantState as useVariantState2, withCSS as withCSS2 } from "unframer";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "unframer";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// /:https://framerusercontent.com/modules/kyoEqXCsmNlG3ETAC1af/EpwcWj3T2RTmMuVUkscf/iqKpwvLsS.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var enabledGestures = { BGcPS_lXp: { hover: true }, STDSJsal7: { hover: true }, UEo7B2o26: { hover: true } };
var cycleOrder = ["UEo7B2o26", "BGcPS_lXp", "STDSJsal7"];
var serializationHash = "framer-XckQX";
var variantClassNames = { BGcPS_lXp: "framer-v-gco7i3", STDSJsal7: "framer-v-1ewy0at", UEo7B2o26: "framer-v-12rlmgh" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "Button Mini": "STDSJsal7", Fill: "BGcPS_lXp", Outline: "UEo7B2o26" };
var getProps = ({ height, id, link, newTab, text, width, ...props }) => {
  return { ...props, MQz7F6Pb7: text ?? props.MQz7F6Pb7 ?? "Button", PhjHhuR66: link ?? props.PhjHhuR66, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "UEo7B2o26", Xplrk679X: newTab ?? props.Xplrk679X };
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
  const { style, className: className3, layoutId, variant, MQz7F6Pb7, PhjHhuR66, Xplrk679X, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "UEo7B2o26", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className2];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: PhjHhuR66, motionChild: true, nodeId: "UEo7B2o26", openInNewTab: Xplrk679X, scopeId: "iqKpwvLsS", children: /* @__PURE__ */ _jsx(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-12rlmgh", className3, classNames)} framer-159cflk`, "data-border": true, "data-framer-name": "Outline", layoutDependency, layoutId: "UEo7B2o26", ref: refBinding, style: { "--border-bottom-width": "1px", "--border-color": "var(--token-f2281524-6303-4e84-a900-a9a142ab836c, rgb(177, 181, 143))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50, ...style }, variants: { "BGcPS_lXp-hover": { backgroundColor: "var(--token-e6782f6a-b44b-4738-a3a9-849005d3c0f5, rgb(139, 107, 48))" }, "STDSJsal7-hover": { backgroundColor: "var(--token-e6782f6a-b44b-4738-a3a9-849005d3c0f5, rgb(139, 107, 48))" }, "UEo7B2o26-hover": { "--border-color": "rgb(171, 146, 106)", backgroundColor: "var(--token-e6782f6a-b44b-4738-a3a9-849005d3c0f5, rgb(171, 146, 106))" }, BGcPS_lXp: { "--border-bottom-width": "0px", "--border-left-width": "0px", "--border-right-width": "0px", "--border-top-width": "0px", backgroundColor: "var(--token-f2281524-6303-4e84-a900-a9a142ab836c, rgb(215, 190, 142))" }, STDSJsal7: { backgroundColor: "rgba(0, 0, 0, 0)" } }, ...addPropertyOverrides({ "BGcPS_lXp-hover": { "data-framer-name": void 0 }, "STDSJsal7-hover": { "data-framer-name": void 0 }, "UEo7B2o26-hover": { "data-framer-name": void 0 }, BGcPS_lXp: { "data-framer-name": "Fill" }, STDSJsal7: { "data-framer-name": "Button Mini" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1er78qb", "data-styles-preset": "d0WA5d5b_", style: { "--framer-text-color": "var(--extracted-r6o4lv, rgb(61, 61, 61))" }, children: "Button" }) }), className: "framer-1x14ia4", fonts: ["Inter"], layoutDependency, layoutId: "YVoEy3ySy", style: { "--extracted-r6o4lv": "rgb(61, 61, 61)", "--framer-paragraph-spacing": "0px" }, text: MQz7F6Pb7, variants: { "BGcPS_lXp-hover": { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))" }, "STDSJsal7-hover": { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))" }, "UEo7B2o26-hover": { "--extracted-r6o4lv": "var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255))" }, BGcPS_lXp: { "--extracted-r6o4lv": "var(--token-564427ef-92c1-4e0d-be6a-50ecc1afab8b, rgb(30, 30, 30))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ "BGcPS_lXp-hover": { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1er78qb", "data-styles-preset": "d0WA5d5b_", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: "Button" }) }) }, "STDSJsal7-hover": { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1er78qb", "data-styles-preset": "d0WA5d5b_", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: "Button" }) }) }, "UEo7B2o26-hover": { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1er78qb", "data-styles-preset": "d0WA5d5b_", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-ce16a6ab-b965-4173-bcd7-639c448a6533, rgb(255, 255, 255)))" }, children: "Button" }) }) }, BGcPS_lXp: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1er78qb", "data-styles-preset": "d0WA5d5b_", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-564427ef-92c1-4e0d-be6a-50ecc1afab8b, rgb(30, 30, 30)))" }, children: "Button" }) }) } }, baseVariant, gestureVariant) }) }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-XckQX.framer-159cflk, .framer-XckQX .framer-159cflk { display: block; }", ".framer-XckQX.framer-12rlmgh { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; }", ".framer-XckQX .framer-1x14ia4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-XckQX.framer-v-1ewy0at.framer-12rlmgh { padding: 8px 16px 8px 16px; }", ...css2, '.framer-XckQX[data-border="true"]::after, .framer-XckQX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FrameriqKpwvLsS = withCSS(Component, css3, "framer-XckQX");
var stdin_default = FrameriqKpwvLsS;
FrameriqKpwvLsS.displayName = "BoutonVD";
FrameriqKpwvLsS.defaultProps = { height: 57.5, width: 113 };
addPropertyControls(FrameriqKpwvLsS, { variant: { options: ["UEo7B2o26", "BGcPS_lXp", "STDSJsal7"], optionTitles: ["Outline", "Fill", "Button Mini"], title: "Variant", type: ControlType.Enum }, MQz7F6Pb7: { defaultValue: "Button", displayTextArea: false, title: "Text", type: ControlType.String }, PhjHhuR66: { title: "Link", type: ControlType.Link }, Xplrk679X: { defaultValue: false, title: "New Tab", type: ControlType.Boolean } });
addFonts(FrameriqKpwvLsS, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// /:https://framer.com/m/Erreur-IVOy.js
var BoutonVDFonts = getFonts(stdin_default);
var cycleOrder2 = ["uG2V1fl0G", "anI_OPhlp", "KBonAiSY0", "XgvuxLSb6"];
var serializationHash2 = "framer-DPvmL";
var variantClassNames2 = { anI_OPhlp: "framer-v-2cklqy", KBonAiSY0: "framer-v-jaozlj", uG2V1fl0G: "framer-v-hfi2oa", XgvuxLSb6: "framer-v-tbl3z5" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap2 = { Desktop: "uG2V1fl0G", Laptop: "anI_OPhlp", Phone: "XgvuxLSb6", Tablet: "KBonAiSY0" };
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "uG2V1fl0G" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className3, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "uG2V1fl0G", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs(motion2.section, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-hfi2oa", className3, classNames), "data-framer-name": "Desktop", layoutDependency, layoutId: "uG2V1fl0G", ref: refBinding, style: { backgroundColor: "var(--token-3399e391-f9d3-4781-bcc9-e38e7cf0c7f5, rgb(249, 253, 254))", ...style }, ...addPropertyOverrides2({ anI_OPhlp: { "data-framer-name": "Laptop" }, KBonAiSY0: { "data-framer-name": "Tablet" }, XgvuxLSb6: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx2(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.h1, { className: "framer-styles-preset-1qobf4s", "data-styles-preset": "H73t_W1ak", style: { "--framer-text-alignment": "center" }, children: "Cette page n'existe pas" }) }), className: "framer-1eamc94", fonts: ["Inter"], layoutDependency, layoutId: "cX6kEfvYF", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx2(ResolveLinks, { links: [{ href: { webPageId: "HqqUpNGKj" }, implicitPathVariables: void 0 }, { href: { webPageId: "HqqUpNGKj" }, implicitPathVariables: void 0 }, { href: { webPageId: "HqqUpNGKj" }, implicitPathVariables: void 0 }, { href: { webPageId: "HqqUpNGKj" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 57, y: (componentViewport?.y || 0) + 0 + (((componentViewport?.height || 528) - 0 - 197.13) / 2 + 81.13 + 59), ...addPropertyOverrides2({ anI_OPhlp: { y: (componentViewport?.y || 0) + 160 + (((componentViewport?.height || 528) - 160 - 197.13) / 2 + 81.13 + 59) }, KBonAiSY0: { y: (componentViewport?.y || 0) + 160 + (((componentViewport?.height || 528) - 160 - 197.13) / 2 + 81.13 + 59) }, XgvuxLSb6: { y: (componentViewport?.y || 0) + 160 + (((componentViewport?.height || 528) - 160 - 197.13) / 2 + 81.13 + 59) } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-105l8gw-container", layoutDependency, layoutId: "HDlVFAIWc-container", nodeId: "HDlVFAIWc", rendersWithMotion: true, scopeId: "fU2NKNM9P", children: /* @__PURE__ */ _jsx2(stdin_default, { height: "100%", id: "HDlVFAIWc", layoutId: "HDlVFAIWc", MQz7F6Pb7: "Emmenez-moi \xE0 l'accueil", PhjHhuR66: resolvedLinks[0], variant: "UEo7B2o26", width: "100%", Xplrk679X: false, ...addPropertyOverrides2({ anI_OPhlp: { PhjHhuR66: resolvedLinks[1] }, KBonAiSY0: { PhjHhuR66: resolvedLinks[2] }, XgvuxLSb6: { PhjHhuR66: resolvedLinks[3] } }, baseVariant, gestureVariant) }) }) }) })] }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-DPvmL.framer-ucf9g9, .framer-DPvmL .framer-ucf9g9 { display: block; }", ".framer-DPvmL.framer-hfi2oa { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 59px; height: min-content; justify-content: center; min-height: calc(var(--framer-viewport-height, 100vh) * 0.66); overflow: visible; padding: 0px 64px 0px 64px; position: relative; width: 1560px; }", ".framer-DPvmL .framer-1eamc94 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-DPvmL .framer-105l8gw-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-DPvmL.framer-v-2cklqy.framer-hfi2oa { padding: 160px 64px 0px 64px; width: 1200px; }", ".framer-DPvmL.framer-v-jaozlj.framer-hfi2oa { padding: 160px 64px 0px 64px; width: 810px; }", ".framer-DPvmL.framer-v-tbl3z5.framer-hfi2oa { padding: 160px 64px 0px 64px; width: 390px; }", ...css];
var FramerfU2NKNM9P = withCSS2(Component2, css4, "framer-DPvmL");
var stdin_default2 = FramerfU2NKNM9P;
FramerfU2NKNM9P.displayName = "Erreur";
FramerfU2NKNM9P.defaultProps = { height: 528, width: 1560 };
addPropertyControls2(FramerfU2NKNM9P, { variant: { options: ["uG2V1fl0G", "anI_OPhlp", "KBonAiSY0", "XgvuxLSb6"], optionTitles: ["Desktop", "Laptop", "Tablet", "Phone"], title: "Variant", type: ControlType2.Enum } });
addFonts2(FramerfU2NKNM9P, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...BoutonVDFonts, ...getFontsFromSharedStyle2(fonts)], { supportsExplicitInterCodegen: true });

// virtual:Erreur
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "XgvuxLSb6",
  "md": "KBonAiSY0",
  "xl": "anI_OPhlp",
  "2xl": "uG2V1fl0G"
};
stdin_default2.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "ABs8A7Jd4": { "path": "/vente" }, "HqqUpNGKj": { "path": "/" }, "X4ktpndPG": { "path": "/Erreur" }, "Xzx1dk12F": { "path": "/latelier" }, "w6N05sxE8": { "path": "/contact" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default2,
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
          "path": "/Erreur"
        },
        "Xzx1dk12F": {
          "path": "/latelier"
        },
        "w6N05sxE8": {
          "path": "/contact"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default2, { ...rest }),
      framerSiteId: "e8637dcc282c405e8332e4eab2cb458a196f99fcac27567df85b0de9996f5033",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default2);
export {
  ComponentWithRoot as default
};
