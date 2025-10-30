"use client";

import { useEffect } from "react";

export default function FaqAccordionAnimator() {
  useEffect(() => {
    const selector = [
      "#general-faqs details",
      "#services-faqs details",
      "#process-delivery-faqs details",
      "#pricing-packages-faqs details",
      "#technical-maintenance-faqs details",
      "#support-communication-faqs details",
    ].join(",");

    const detailsList = Array.from(
      document.querySelectorAll<HTMLDetailsElement>(selector)
    );

    const listeners: Array<() => void> = [];

    detailsList.forEach((details) => {
      const summary = details.querySelector("summary");
      if (!summary) return;

      // Wrap all non-summary siblings into a single container for animation
      let content = details.querySelector<HTMLElement>(".faq-content");
      if (!content) {
        content = document.createElement("div");
        content.className = "faq-content";
        content.style.overflow = "hidden";
        content.style.height = details.open ? "auto" : "0px";

        const nodesToMove: ChildNode[] = [];
        let node = summary.nextSibling;
        while (node) {
          const next = node.nextSibling;
          nodesToMove.push(node);
          node = next;
        }
        nodesToMove.forEach((n) => content!.appendChild(n));
        details.appendChild(content);
      }

      const onClick = (e: Event) => {
        e.preventDefault();
        const isOpen = details.hasAttribute("open");

        const duration = 300;
        content!.style.transition = `height ${duration}ms ease`;

        if (!isOpen) {
          // Opening: set open immediately so content becomes visible, then animate height
          details.setAttribute("open", "");
          const target = content!.scrollHeight;
          content!.style.height = "0px";
          requestAnimationFrame(() => {
            content!.style.height = `${target}px`;
          });
          const end = () => {
            content!.style.transition = "";
            content!.style.height = "auto"; // allow content to grow naturally
            content!.removeEventListener("transitionend", end);
          };
          content!.addEventListener("transitionend", end);
        } else {
          // Closing: animate from current height to 0, then remove open attribute
          const start = content!.scrollHeight;
          content!.style.height = `${start}px`;
          requestAnimationFrame(() => {
            content!.style.height = "0px";
          });
          const end = () => {
            details.removeAttribute("open");
            content!.style.transition = "";
            // Keep at 0px when closed
            content!.removeEventListener("transitionend", end);
          };
          content!.addEventListener("transitionend", end);
        }
      };

      summary.addEventListener("click", onClick);
      listeners.push(() => summary.removeEventListener("click", onClick));
    });

    return () => listeners.forEach((off) => off());
  }, []);

  return null;
}
