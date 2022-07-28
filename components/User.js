import React from 'react'

function User({ user }) {
    const {username} = user;
  return (
    <div
      className="max-w-[250px] rounded overflow-hidden shadow-lg"
      key={user.id}
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
      </div>
    </div>
  )
}

User.defaultProps = {
    user: {
      username: "John Doe",
    }
  };

export default User