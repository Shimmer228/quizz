module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/pages/quizzes/[id].tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>QuizPage
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
function QuizPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { id } = router.query;
    const [quiz, setQuiz] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [showAnswers, setShowAnswers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!id) return;
        const fetchQuiz = async ()=>{
            try {
                const res = await fetch(`${API_URL}/quizzes/${id}`);
                const data = await res.json();
                setQuiz(data);
                setShowAnswers(new Array(data.questions.length).fill(false));
            } catch (err) {
                console.error('Failed to fetch quiz', err);
            } finally{
                setLoading(false);
            }
        };
        fetchQuiz();
    }, [
        id
    ]);
    const toggleAnswer = (index)=>{
        setShowAnswers((prev)=>{
            const updated = [
                ...prev
            ];
            updated[index] = !updated[index];
            return updated;
        });
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
        className: "p-4",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/pages/quizzes/[id].tsx",
        lineNumber: 40,
        columnNumber: 27
    }, this);
    if (!quiz) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
        className: "p-4",
        children: "Quiz not found"
    }, void 0, false, {
        fileName: "[project]/pages/quizzes/[id].tsx",
        lineNumber: 41,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: ()=>router.push('/'),
                className: "backButton",
                children: "← Back to main page"
            }, void 0, false, {
                fileName: "[project]/pages/quizzes/[id].tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "title",
                children: quiz.title
            }, void 0, false, {
                fileName: "[project]/pages/quizzes/[id].tsx",
                lineNumber: 49,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: quiz.questions.map((question, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "question",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "questionText",
                                children: [
                                    index + 1,
                                    ". ",
                                    question.text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/quizzes/[id].tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "questionType",
                                children: [
                                    "Type: ",
                                    question.type
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/quizzes/[id].tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this),
                            question.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                disabled: true,
                                placeholder: "Your answer",
                                className: "inputField"
                            }, void 0, false, {
                                fileName: "[project]/pages/quizzes/[id].tsx",
                                lineNumber: 57,
                                columnNumber: 19
                            }, this),
                            question.type === 'textarea' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                disabled: true,
                                placeholder: "Your detailed answer",
                                className: "textareaField"
                            }, void 0, false, {
                                fileName: "[project]/pages/quizzes/[id].tsx",
                                lineNumber: 60,
                                columnNumber: 19
                            }, this),
                            question.type === 'checkbox' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: question.options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                        className: "checkboxLabel",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                disabled: true
                                            }, void 0, false, {
                                                fileName: "[project]/pages/quizzes/[id].tsx",
                                                lineNumber: 66,
                                                columnNumber: 25
                                            }, this),
                                            " ",
                                            opt
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/pages/quizzes/[id].tsx",
                                        lineNumber: 65,
                                        columnNumber: 23
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/quizzes/[id].tsx",
                                lineNumber: 63,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleAnswer(index),
                                className: "toggleAnswerBtn",
                                children: showAnswers[index] ? 'Hide answer' : 'Show answer'
                            }, void 0, false, {
                                fileName: "[project]/pages/quizzes/[id].tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this),
                            showAnswers[index] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "answer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("b", {
                                        children: "Answer:"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/quizzes/[id].tsx",
                                        lineNumber: 76,
                                        columnNumber: 62
                                    }, this),
                                    " ",
                                    question.answer
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/quizzes/[id].tsx",
                                lineNumber: 76,
                                columnNumber: 40
                            }, this)
                        ]
                    }, question.id, true, {
                        fileName: "[project]/pages/quizzes/[id].tsx",
                        lineNumber: 52,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pages/quizzes/[id].tsx",
                lineNumber: 50,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/quizzes/[id].tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__516e0037._.js.map