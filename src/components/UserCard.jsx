"use client";

import { Mail, Phone, MapPin, Globe, Hash } from "lucide-react";

export default function UserCard({ user }) {
  const fullName = `${user?.name.firstname} ${user?.name.lastname}`;

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
      {/* Header */}
      <div className="flex flex-col items-center p-6 bg-linear-to-r from-indigo-500 to-purple-500">
        <div className="w-20 h-20 rounded-full bg-white text-indigo-600 flex items-center justify-center text-2xl font-bold shadow-md">
          {user.name.firstname.charAt(0).toUpperCase()}
        </div>

        <h2 className="mt-4 text-xl font-semibold text-white capitalize">
          {fullName}
        </h2>

        <p className="text-indigo-100 text-sm">@{user.username}</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-3">
          <Hash size={16} />
          <span>ID: {user.id}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={16} />
          <span className="truncate">{user.email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={16} />
          <span>{user.phone}</span>
        </div>

        <div className="flex items-start gap-3">
          <MapPin size={16} className="mt-1" />
          <div className="leading-tight">
            <p className="capitalize">
              {user.address.number} {user.address.street}
            </p>
            <p className="capitalize">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Globe size={16} />
          <span>
            {user.address.geolocation.lat}, {user.address.geolocation.long}
          </span>
        </div>
      </div>
    </div>
  );
}
