"use client";
export default function TopicTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const requestTime = new Date();
  return (
    <div>
      {children}
      <footer>Last Checked: {requestTime.toLocaleTimeString()}</footer>
    </div>
  );
}
