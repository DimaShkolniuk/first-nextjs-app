export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>User</h1>
      <hr />
      <br />
      <p className="text-4xl">
        Profile page
        <span className=" font-bold text-black p-1 ml-2 rounded bg-orange-500">
          {params.id}
        </span>
      </p>
    </div>
  )
}
