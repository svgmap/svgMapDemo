// proxySetup.js
import { CorsProxy } from 'https://cdn.jsdelivr.net/gh/svgmap/svgmapjs@latest/CorsProxyModule.js';

/**
 * svgMap に日次トークン付きセキュア CORS プロキシを設定する
 * @param {Object} targetSvgMap - 設定対象の svgMap インスタンス
 * @returns {Promise<CorsProxy>} 初期化済みの CorsProxy インスタンス
 */
export async function setupSecuredCorsProxy(targetSvgMap) {
  const corsProxy = new CorsProxy();
  window.corsProxy = corsProxy; // 互換性維持のため window にも保持

  let lastDateStr = "";
  async function refreshProxyToken() {
    const salt = "svgmap_chirimen_secret_salt_2026";
    const dateStr = new Date().toISOString().slice(0, 10); // UTC日付基準

    if (dateStr === lastDateStr) return;

    const hashBuf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${salt}:${dateStr}`));
    const token = Array.from(new Uint8Array(hashBuf))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("")
      .slice(0, 16);

    const proxyPath = `https://service.svgmap.org/sec_corsaw/${token}/`;
    corsProxy.setService(proxyPath, null, true, false);
    lastDateStr = dateStr;
  }

  // 初回トークン設定
  await refreshProxyToken();

  // プロキシ関数を登録
  targetSvgMap.setProxyURLFactory(null, null, null, corsProxy.getURLfunction(), true);

  // 定期監視タイマー（1分間隔）
  setInterval(refreshProxyToken, 60 * 1000);

  return corsProxy;
}
