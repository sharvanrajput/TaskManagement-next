"use client";

import { AppSidebar } from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [t, sett] = useState<string | null>(null)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        sett(token)
        if (!token && pathname !== "/auth/login") {
            router.replace("/auth/login");
        }

        setLoading(false);
    }, [pathname, router]);

    if (loading) return null;
    if (t) {
        return (
            <SidebarProvider >
                <AppSidebar />
                <main className="w-full  px-3">
                    <Navbar />
                    {children}
                </main>
            </SidebarProvider>
        )
    }
}
