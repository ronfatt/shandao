"use client";

import { useState } from "react";

type DemoFormProps = {
  title: string;
  fields?: "contact" | "registration" | "volunteer" | "subscribe";
};

export function DemoForm({ title, fields = "contact" }: DemoFormProps) {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(formData: FormData) {
    const required = Array.from(formData.entries()).filter(([key]) => key !== "message");
    const hasEmpty = required.some(([, value]) => String(value).trim().length === 0);
    if (hasEmpty) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setStatus("success");
    }, 500);
  }

  const isSubscribe = fields === "subscribe";

  return (
    <form action={handleSubmit} className="rounded-2xl border border-border-warm bg-background-cream p-6 shadow-soft">
      <h3 className="serif-title mb-2 text-2xl font-bold text-brand-brown-dark">{title}</h3>
      <p className="mb-5 text-sm text-text-secondary">演示模式：目前不会保存或发送任何资料。</p>
      <div className="grid gap-4">
        {!isSubscribe ? (
          <>
            <label className="grid gap-2 text-sm font-semibold text-text-primary">
              姓名
              <input name="name" className="min-h-11 rounded-xl border border-border-warm bg-white px-4 text-base" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-text-primary">
              联系方式
              <input name="contact" className="min-h-11 rounded-xl border border-border-warm bg-white px-4 text-base" />
            </label>
          </>
        ) : null}
        <label className="grid gap-2 text-sm font-semibold text-text-primary">
          Email
          <input name="email" type="email" className="min-h-11 rounded-xl border border-border-warm bg-white px-4 text-base" />
        </label>
        {!isSubscribe ? (
          <label className="grid gap-2 text-sm font-semibold text-text-primary">
            留言
            <textarea name="message" rows={4} className="rounded-xl border border-border-warm bg-white px-4 py-3 text-base" />
          </label>
        ) : null}
        {status === "error" ? <p className="text-sm font-semibold text-brand-red">请填写必填栏位后再提交。</p> : null}
        {status === "success" ? <p className="text-sm font-semibold text-brand-brown">已完成演示提交。正式上线前需连接后台服务。</p> : null}
        <button
          className="min-h-11 rounded-full bg-brand-brown px-5 py-2.5 text-[17px] font-semibold text-white transition hover:bg-brand-brown-dark disabled:cursor-not-allowed disabled:opacity-70"
          disabled={submitting}
          type="submit"
        >
          {submitting ? "提交中..." : "提交"}
        </button>
      </div>
    </form>
  );
}
