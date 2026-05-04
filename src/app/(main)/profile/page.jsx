"use client";

import UpdateProfileModal from "@/components/UpdateProfileModal";
import { authClient } from "@/lib/auth-client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

const ProfilePage = () => {
  const userSession = authClient.useSession();
  const userInfo = userSession.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <Card className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/30">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#5271FF] shadow-lg shadow-[#5271FF]/20">
              <Image
                src={userInfo?.image || "/default-avatar.png"}
                alt={userInfo?.name || "User"}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white">
                {userInfo?.name || "User Name"}
              </h1>

              <p className="text-gray-400 text-sm">
                {userInfo?.email || "user@email.com"}
              </p>

              <span className="inline-block mt-1 px-3 py-1 text-xs rounded-full bg-[#5271FF]/20 text-[#5271FF] border border-[#5271FF]/30">
                {userInfo?.emailVerified ? "✔ Verified" : "Not Verified"}
              </span>
            </div>

            <div className="flex gap-3 mt-6">
              <UpdateProfileModal />
              <Button
                onClick={handleLogout}
                variant="bordered"
                className="border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white rounded-xl px-5"
              >
                Logout
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
