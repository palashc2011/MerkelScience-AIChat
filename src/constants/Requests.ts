export const API_ENDPOINTS = {
    referral: {
      path: `/referral`,
      method: "GET",
    },
    interviews: {
      path: "/interview",
      method: "GET",
    },
    postInterviews: {
      path: "/interview",
      method: "POST",
    },
    getInterviewer: {
      path: "/interviewer",
      method: "GET",
    },
    request: {
      path: "/interview/1/schedule",
      method: "GET",
    },
    position: {
      path: "/position",
      method: "GET",
    },
    jobs: {
      path: "/settings/jobs",
      method: "PUT",
    },
    login_google_redirect_url: {
      path: "/auth/google/redirectUrl",
      method: "GET",
    },
    login_google_token_auth: {
      path: "/auth/google/authenticate",
      method: "PUT",
    },
    login_outlook_token_auth: {
      path: "/auth/outlook/callback",
      method: "GET",
    },
    login_zoho_token_auth: {
      generatePath: (isRecruiter: boolean, code: string) => `/auth/zoho/callback?code=${code}&isRecruiter=${isRecruiter}`,
      method: "GET",
    },
}
  