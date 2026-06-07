(function () {
  var path = window.location.pathname;

  var items = [
    { href: '/index.html',                label: 'トップページ' },
    { href: '',                            label: '創作物(工事中)' },
    { href: '/blog.html',                  label: '個人ブログ' },
    { href: '',                            label: '画廊(工事中)' },
    { href: '/links/index.html',           label: 'リンク集' },
    { href: 'https://yamatoblog.hateblo.jp/', label: '大和ノ畢生載録(ﾔﾏﾄﾉﾋｯｾｲｻｲﾛｸ)', external: true },
    { href: 'https://x.com/yamato_vr',        label: 'X(旧ツイッター)',               external: true },
    { href: 'https://misskey.m544.net/@yamato', label: 'めいすきー(Misskey)',           external: true },
  ];

  var html = items.map(function (item) {
    // 空hrefはリンクなし（工事中など）
    if (!item.href) return '[' + item.label + ']';

    // 外部リンクは常にリンクあり
    if (item.external) {
      return '[<a href="' + item.href + '" target="_blank">' + item.label + '</a>]';
    }

    // 現在ページは非リンク（トップページは / または /index.html の両方を考慮）
    var isCurrent = (path === item.href)
      || (item.href === '/index.html' && (path === '/' || path === ''));
    if (isCurrent) return '[' + item.label + ']';

    return '[<a href="' + item.href + '">' + item.label + '</a>]';
  }).join('\n');

  document.write(html);
})();
