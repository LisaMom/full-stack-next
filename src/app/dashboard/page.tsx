export default async function DashboardPage() {
  await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  return (
    <h1>Welcome to Dashboard!</h1>
  );
}