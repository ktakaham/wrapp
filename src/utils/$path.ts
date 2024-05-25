export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "p": {
    "post": {
      _postId: (postId: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/p/post/[postId]' as const, query: { postId }, hash: url?.hash })
      }),
      $url: (url?: { hash?: string }) => ({ pathname: '/p/post' as const, hash: url?.hash })
    }
  },
  "posts": {
    _postId: (postId: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[postId]' as const, query: { postId }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico'
} as const

export type StaticPath = typeof staticPath
