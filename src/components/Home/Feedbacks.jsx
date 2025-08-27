"use client";

export default function Feedback() {
  return (
    <div>
      <div className="flex overflow-auto p-8 gap-8 scrollbar-hide scrollbar-hide bg-white">
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
        <FeedbackComp />
      </div>
    </div>
  );
}

function FeedbackComp() {
  return (
    <div className="border-2 border-black h-32 w-64 shrink-0 flex flex-col gap-2 rounded-xl border-[1px] border-black">
      <div>⭐⭐⭐⭐⭐</div>
      <p></p>
      <div className="flex flex-col gap-2">
        <h1>Get Core</h1>
        <p>
          <i>Moradabad, India</i>
        </p>
      </div>
    </div>
  );
}
