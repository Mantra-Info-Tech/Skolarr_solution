"use client";

import { AnimatePresence, motion } from "framer-motion";

type SuccessPopupProps = {
  open: boolean;
  message: string;
};

export default function SuccessPopup({ open, message }: SuccessPopupProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[80] rounded-2xl border border-green-100 bg-white px-5 py-4 shadow-2xl"
          role="status"
          aria-live="polite"
        >
          <p className="text-sm font-semibold text-green-700">Thank you!</p>
          <p className="mt-0.5 text-sm text-gray-700">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
