interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const json = (body: unknown, init: ResponseInit = {}) => {
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "no-store");
  headers.set("X-Content-Type-Options", "nosniff");

  return new Response(JSON.stringify(body), { ...init, headers });
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/health") {
      return json({
        ok: true,
        service: "scoopic-campus-ambassador-app"
      });
    }

    if (url.pathname.startsWith("/api/")) {
      return json(
        {
          ok: false,
          error: "Not found"
        },
        { status: 404 }
      );
    }

    return env.ASSETS.fetch(request);
  }
};
