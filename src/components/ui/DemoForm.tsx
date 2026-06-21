"use client";

import { useEffect, useRef, useState } from "react";

type DemoFormProps = {
  title: string;
  fields?: "contact" | "registration" | "volunteer" | "subscribe";
  tone?: "light" | "dark";
};

export function DemoForm({ title, fields = "contact", tone = "light" }: DemoFormProps) {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [submitting, setSubmitting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function handleSubmit(formData: FormData) {
    const required = Array.from(formData.entries()).filter(([key]) => key !== "message");
    const hasEmpty = required.some(([, value]) => String(value).trim().length === 0);
    if (hasEmpty) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setSubmitting(false);
      setStatus("success");
      timeoutRef.current = null;
    }, 500);
  }

  const isSubscribe = fields === "subscribe";

  const dark = tone === "dark";

  return (
    <form action={handleSubmit} className={dark ? "rounded-[1.25rem] border border-white/[0.12] bg-white/[0.06] p-5" : "rounded-[1.25rem] border border-border-warm bg-background-cream p-6 shadow-card"}>
      <h3 className={dark ? "serif-title mb-2 text-[1.35rem] font-bold text-white" : "serif-title mb-2 text-2xl font-bold text-brand-brown-dark"}>{title}</h3>
      <p className={dark ? "mb-5 text-sm text-white/58" : "mb-5 text-sm text-text-secondary"}>演示模式：目前不会保存或发送任何资料。</p>
      <div className="grid gap-4">
        {!isSubscribe ? (
          <>
            <label className={dark ? "grid gap-2 text-sm font-semibold text-white/82" : "grid gap-2 text-sm font-semibold text-text-primary"}>
              姓名
              <input name="name" className={dark ? "min-h-11 rounded-xl border border-white/[0.14] bg-white/10 px-4 text-base text-white" : "min-h-11 rounded-xl border border-border-warm bg-white px-4 text-base"} />
            </label>
            <label className={dark ? "grid gap-2 text-sm font-semibold text-white/82" : "grid gap-2 text-sm font-semibold text-text-primary"}>
              联系方式
              <input name="contact" className={dark ? "min-h-11 rounded-xl border border-white/[0.14] bg-white/10 px-4 text-base text-white" : "min-h-11 rounded-xl border border-border-warm bg-white px-4 text-base"} />
            </label>
          </>
        ) : null}
        <label className={dark ? "grid gap-2 text-sm font-semibold text-white/82" : "grid gap-2 text-sm font-semibold text-text-primary"}>
          Email
          <input name="email" type="email" className={dark ? "min-h-11 rounded-xl border border-white/[0.14] bg-white/10 px-4 text-base text-white" : "min-h-11 rounded-xl border border-border-warm bg-white px-4 text-base"} />
        </label>
        {!isSubscribe ? (
          <label className={dark ? "grid gap-2 text-sm font-semibold text-white/82" : "grid gap-2 text-sm font-semibold text-text-primary"}>
            留言
            <textarea name="message" rows={4} className={dark ? "rounded-xl border border-white/[0.14] bg-white/10 px-4 py-3 text-base text-white" : "rounded-xl border border-border-warm bg-white px-4 py-3 text-base"} />
          </label>
        ) : null}
        {status === "error" ? <p className={dark ? "text-sm font-semibold text-brand-gold-light" : "text-sm font-semibold text-brand-red"}>请填写必填栏位后再提交。</p> : null}
        {status === "success" ? <p className={dark ? "text-sm font-semibold text-brand-gold-light" : "text-sm font-semibold text-brand-brown"}>已完成演示提交。正式上线前需连接后台服务。</p> : null}
        <button
          className={dark ? "min-h-11 rounded-full bg-[#d7ac64] px-5 py-2.5 text-[16px] font-semibold text-brand-brown-dark transition hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-70" : "min-h-11 rounded-full bg-brand-brown px-5 py-2.5 text-[16px] font-semibold text-white transition hover:bg-brand-brown-dark disabled:cursor-not-allowed disabled:opacity-70"}
          disabled={submitting}
          type="submit"
        >
          {submitting ? "提交中..." : "提交"}
        </button>
      </div>
    </form>
  );
}
