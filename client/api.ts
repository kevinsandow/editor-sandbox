import {createTRPCReact} from "@trpc/react-query";
import {createContext} from "react";
import {QueryClient} from "@tanstack/react-query";
import {httpLink} from "@trpc/client";

import {AppRouter} from "../server/router.ts";

export const api = createTRPCReact<AppRouter>({
  context: createContext<QueryClient | undefined>(undefined),
})

export const apiClient = api.createClient({
  links: [httpLink({ url: '/api' })],
})
