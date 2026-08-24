# Scoopic 线下校园大使网站交接文档

更新日期：2026-08-24

## 唯一代码仓库

- GitHub：[yinyi1216-cmyk/scoopic--campus-ambassador-site](https://github.com/yinyi1216-cmyk/scoopic--campus-ambassador-site)
- 默认分支：`main`
- 本仓库是该项目代码、配置和页面素材的唯一交接入口。

已确认以下内容均在同一个仓库中：

- 前端源码：`src/`
- Cloudflare Worker：`worker/`
- 静态页面、字体、图片和视频素材：`public/`
- Vite、TypeScript、pnpm 与 Cloudflare 配置
- 锁文件：`pnpm-lock.yaml`

`node_modules/` 与 `dist/` 是可重新生成的依赖和构建产物，不属于需要提交的源代码。

## 线上入口

- 正式网站：https://scoopic-campus-ambassador-site.pages.dev/
- 手机模拟预览：https://scoopic-campus-ambassador-site.pages.dev/mobile-preview

## Cloudflare 项目

- Cloudflare Account ID：`f9d8b96f22ffbbb03dceb66d785a8597`
- Pages 项目：`scoopic-campus-ambassador`
- 独立 Worker：`scoopic-campus-ambassador-app`
- 旧站 `scoopic-ambassador.scoopic-ai.workers.dev` 与本项目独立，不应修改。

## 本地开发

```bash
pnpm install
pnpm dev
```

构建与本地预览：

```bash
pnpm build
pnpm preview
```

## Worker 开发与发布

```bash
pnpm dev:worker
pnpm deploy:worker
```

Worker 健康检查接口：`GET /api/health`

## 交接检查

交接前请确认：

1. `git status` 无未提交文件。
2. 本地 `HEAD` 与 `origin/main` 一致。
3. `pnpm build` 通过。
4. 正式网站和手机模拟预览均可打开。
5. 新增源码、配置或页面素材必须提交到上述同一 GitHub 仓库。
