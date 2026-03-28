import { AnimatePresence, motion } from "motion/react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Head } from "./components/seo/Head";
import { ChangelogPage } from "./pages/changelog/ChangelogPage";
import { DocsPage } from "./pages/docs/DocsPage";
import { LandingPage } from "./pages/landing/LandingPage";
import { PrivacyPage } from "./pages/privacy/PrivacyPage";
import { SecurityPage } from "./pages/security/SecurityPage";
import { SupportPage } from "./pages/support/SupportPage";
import { TermsPage } from "./pages/terms/TermsPage";

const pageTransition = {
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(6px)",
    transition: { duration: 0.24, ease: [0.4, 0, 1, 1] },
  },
};

export function App() {
  const location = useLocation();

  return (
    <>
    <Head />
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docs/*" element={<DocsPage />} />
          <Route path="/changelog/*" element={<ChangelogPage />} />
          <Route path="/security/*" element={<SecurityPage />} />
          <Route path="/support/*" element={<SupportPage />} />
          <Route path="/privacy/*" element={<PrivacyPage />} />
          <Route path="/terms/*" element={<TermsPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
    </>
  );
}
