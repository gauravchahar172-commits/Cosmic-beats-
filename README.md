<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>Cosmic Beats</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
/* === YOUR ORIGINAL 100% UNCHANGED CSS === */
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
:root{--bg:#06060f;--sf:#0f0f1e;--card:#161628;--card2:#1e1e35;--b:rgba(255,255,255,0.06);--pu:#8b5cf6;--pk:#d946ef;--bl:#6366f1;--tx:#f4f4f8;--mu:#6b6b8a}
html,body{height:100%;overflow:hidden}
body{background:var(--bg);color:var(--tx);font-family:'Inter',sans-serif;font-size:14px;-webkit-font-smoothing:antialiased}
body::after{content:'';position:fixed;inset:0;background:radial-gradient(ellipse at 20% 20%,rgba(139,92,246,0.07) 0%,transparent 50%),radial-gradient(ellipse at 80% 80%,rgba(217,70,239,0.05) 0%,transparent 50%);pointer-events:none;z-index:0}
::-webkit-scrollbar{width:3px;height:3px}
::-webkit-scrollbar-thumb{background:var(--pu);border-radius:2px}
#app{position:fixed;inset:0;display:flex;flex-direction:column;z-index:1}
.topbar{flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:52px 20px 16px;background:linear-gradient(180deg,rgba(6,6,15,0.98) 60%,transparent)}
.tlogo{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:900;background:linear-gradient(135deg,var(--pu),var(--pk));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.tact{display:flex;gap:10px}
.tibtn{width:34px;height:34px;border-radius:50%;border:1px solid var(--b);background:var(--sf);color:var(--mu);display:flex;align-items:center;justify-content:center;cursor:pointer}
.tibtn svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.8}
.pages{flex:1;overflow:hidden;position:relative}
.page{position:absolute;inset:0;overflow-y:auto;padding-bottom:80px;opacity:0;pointer-events:none;transition:opacity .2s}
.page.active{opacity:1;pointer-events:all}
.page::-webkit-scrollbar{display:none}
.bnav{flex-shrink:0;display:flex;background:rgba(15,15,30,0.98);backdrop-filter:blur(20px);border-top:1px solid var(--b);padding:8px 0 calc(8px + env(safe-area-inset-bottom))}
.nb{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;color:var(--mu);cursor:pointer;padding:4px;transition:color .2s}
.nb.on{color:var(--pu)}
.nb svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.8}
.nb span{font-size:10px;font-weight:600;letter-spacing:.3px}
/* HOME */
.banner{margin:8px 16px 20px;padding:20px;background:linear-gradient(135deg,rgba(139,92,246,0.14),rgba(217,70,239,0.07));border:1px solid rgba(139,92,246,0.2);border-radius:16px;position:relative;overflow:hidden}
.banner::before{content:'';position:absolute;right:-20px;top:-20px;width:100px;height:100px;background:radial-gradient(circle,rgba(139,92,246,0.2),transparent);border-radius:50%}
.blabel{font-size:11px;font-weight:600;color:var(--mu);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
.btitle{font-family:'Orbitron',sans-serif;font-size:18px;font-weight:700;margin-bottom:4px}
.bsub{font-size:13px;color:var(--mu);line-height:1.5}
.bcredit{margin-top:10px;font-size:11px;color:var(--pu);font-weight:500;letter-spacing:.5px}
/* SURPRISE */
.sw{padding:0 16px 20px}
.sbtn{width:100%;padding:16px;background:linear-gradient(135deg,var(--pu),var(--pk));border:none;border-radius:14px;color:#fff;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:0 8px 32px rgba(139,92,246,0.3);position:relative;overflow:hidden;transition:transform .15s}
.sbtn::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent);transform:translateX(-100%);animation:sb 3s infinite}
@keyframes sb{to{transform:translateX(300%)}}
.sbtn:active{transform:scale(0.98)}
.sico{animation:spin 5s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
/* SECTION */
.sec{margin-bottom:24px}
.shead{display:flex;align-items:center;justify-content:space-between;padding:0 16px 12px}
.stitle{font-size:12px;font-weight:700;color:var(--tx);letter-spacing:.8px;text-transform:uppercase}
.smore{font-size:12px;color:var(--pu);background:none;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-weight:500}
/* HROW */
.hr{display:flex;gap:12px;padding:0 16px;overflow-x:auto;scrollbar-width:none;scroll-snap-type:x mandatory}
.hr::-webkit-scrollbar{display:none}
/* SONG CARD */
.sc{flex-shrink:0;width:130px;cursor:pointer;scroll-snap-align:start;transition:transform .15s}
.sc:active{transform:scale(0.96)}
.sca{width:130px;height:130px;border-radius:12px;background:var(--card2);margin-bottom:8px;overflow:hidden;position:relative}
.sca img{width:100%;height:100%;object-fit:cover;display:block}
.scph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--card2),var(--card))}
.scph svg{width:36px;height:36px;stroke:var(--mu);fill:none;stroke-width:1.2}
.scov{position:absolute;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .15s;border-radius:12px}
.scov svg{width:32px;height:32px;fill:white;stroke:none}
.sc:active .scov{opacity:1}
.scn{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--tx)}
.scar{font-size:11px;color:var(--mu);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
/* AI CARD */
.ac{flex-shrink:0;width:140px;cursor:pointer;scroll-snap-align:start;transition:transform .15s}
.ac:active{transform:scale(0.96)}
.aca{width:140px;height:140px;border-radius:14px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.aca svg{width:44px;height:44px;stroke:rgba(255,255,255,0.6);fill:none;stroke-width:1.2}
.atag{position:absolute;top:8px;right:8px;background:rgba(0,0,0,0.55);border-radius:20px;padding:2px 8px;font-size:9px;font-weight:700;color:#fff;letter-spacing:1px}
.acn{font-size:13px;font-weight:600;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.acs{font-size:11px;color:var(--mu);margin-top:2px}
/* ARTIST */
.arc{flex-shrink:0;width:80px;text-align:center;cursor:pointer;transition:transform .15s}
.arc:active{transform:scale(0.96)}
.arci{width:72px;height:72px;border-radius:50%;margin:0 auto 6px;background:var(--card2);overflow:hidden;border:2px solid rgba(139,92,246,0.25);display:flex;align-items:center;justify-content:center}
.arci img{width:100%;height:100%;object-fit:cover}
.arci svg{width:26px;height:26px;stroke:var(--mu);fill:none;stroke-width:1.5}
.arcn{font-size:10px;font-weight:600;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
/* SKELETON */
.sk{background:linear-gradient(90deg,var(--card) 25%,var(--card2) 50%,var(--card) 75%);background-size:200% 100%;animation:sk 1.5s infinite;border-radius:12px;flex-shrink:0}
@keyframes sk{0%{background-position:200% 0}100%{background-position:-200% 0}}
/* MINI PLAYER */
.mp{position:fixed;bottom:calc(56px + env(safe-area-inset-bottom));left:8px;right:8px;z-index:9;background:rgba(22,22,40,0.97);backdrop-filter:blur(30px);border:1px solid rgba(139,92,246,0.2);border-radius:14px;padding:10px 14px;display:none;align-items:center;gap:12px;cursor:pointer;box-shadow:0 -4px 30px rgba(139,92,246,0.12)}
.mp.on{display:flex}
.mpA{width:40px;height:40px;border-radius:8px;background:var(--card2);flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center}
.mpA img{width:100%;height:100%;object-fit:cover}
.mpA svg{width:16px;height:16px;stroke:var(--mu);fill:none}
.mpI{flex:1;min-width:0}
.mpt{font-size:13px;font-weight:600;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mpa{font-size:11px;color:var(--mu);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mpc{display:flex;gap:8px;align-items:center}
.mpcb{background:none;border:none;color:var(--mu);cursor:pointer;padding:6px;display:flex}
.mpcb svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:1.8}
.mpb{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--pu),var(--pk));border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}
.mpb svg{width:13px;height:13px;fill:white;stroke:none}
.mpp{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(139,92,246,0.12);border-radius:0 0 14px 14px;overflow:hidden}
.mpb2{height:100%;background:linear-gradient(90deg,var(--pu),var(--pk));width:0%;transition:width 1s linear}
/* FULL PLAYER */
.fp{position:fixed;inset:0;z-index:100;background:var(--bg);display:flex;flex-direction:column;transform:translateY(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);overflow-y:auto}
.fp.on{transform:translateY(0)}
.fpbl{position:absolute;inset:0;z-index:0;filter:blur(60px);opacity:0.25;transition:background 1s}
.fpb{position:relative;z-index:1;display:flex;flex-direction:column;padding-bottom:32px}
.fph{display:flex;align-items:center;justify-content:space-between;padding:52px 20px 16px}
.fphb{background:none;border:none;color:var(--mu);cursor:pointer;display:flex}
.fphb svg{width:26px;height:26px;stroke:currentColor;fill:none;stroke-width:1.8}
.fphl{font-size:11px;font-weight:600;color:var(--mu);letter-spacing:2px;text-transform:uppercase}
.fpmore{background:none;border:none;color:var(--mu);cursor:pointer;font-size:22px;line-height:1}
.fpaw{display:flex;justify-content:center;padding:16px 32px}
.fpa{width:min(260px,74vw);height:min(260px,74vw);border-radius:20px;background:var(--card2);overflow:hidden;box-shadow:0 24px 64px rgba(0,0,0,0.5),0 0 0 1px rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center}
.fpa img{width:100%;height:100%;object-fit:cover}
.fpa svg{width:70px;height:70px;stroke:var(--mu);fill:none;stroke-width:1}
.fpa.sp{animation:aspin 25s linear infinite}
@keyframes aspin{to{transform:rotate(360deg)}}
/* VIS */
.vis{display:flex;align-items:flex-end;justify-content:center;gap:4px;height:28px;padding:0 24px;margin:12px 0}
.vb{width:3px;background:linear-gradient(to top,var(--pu),var(--pk));border-radius:2px;min-height:3px;animation:vb .7s ease-in-out infinite alternate}
.vb:nth-child(1){animation-delay:0s}.vb:nth-child(2){animation-delay:.08s}.vb:nth-child(3){animation-delay:.16s}.vb:nth-child(4){animation-delay:.24s}.vb:nth-child(5){animation-delay:.32s}.vb:nth-child(6){animation-delay:.24s}.vb:nth-child(7){animation-delay:.16s}.vb:nth-child(8){animation-delay:.08s}.vb:nth-child(9){animation-delay:0s}
@keyframes vb{from{height:3px}to{height:22px}}
.vis.ps .vb{animation-play-state:paused}
.fpi{padding:0 24px 4px}
.fpt{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:700;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:4px}
.fpas{font-size:14px;color:var(--mu);font-weight:500}
.fpac{display:flex;justify-content:space-between;padding:14px 20px}
.fpab{background:none;border:none;color:var(--mu);cursor:pointer;padding:8px;display:flex;transition:color .2s}
.fpab svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:1.8}
.fpab.lk svg{stroke:var(--pk);fill:var(--pk)}
/* PROGRESS */
.fppg{padding:0 24px 4px}
.pgt{height:3px;background:rgba(255,255,255,0.07);border-radius:2px;cursor:pointer;margin-bottom:8px;position:relative}
.pgf{height:100%;background:linear-gradient(90deg,var(--pu),var(--pk));border-radius:2px;width:0%;transition:width .5s linear;position:relative}
.pgf::after{content:'';position:absolute;right:-5px;top:-4px;width:11px;height:11px;border-radius:50%;background:#fff}
.pgts{display:flex;justify-content:space-between;font-size:11px;color:var(--mu);font-weight:500}
/* CONTROLS */
.fpc{display:flex;align-items:center;justify-content:space-between;padding:16px 24px}
.ctrl{background:none;border:none;color:var(--mu);cursor:pointer;padding:8px;display:flex;transition:color .2s}
.ctrl svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.8}
.ctrl.on{color:var(--pu)}
.ctrlm{width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,var(--pu),var(--pk));border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(139,92,246,0.45);transition:transform .15s}
.ctrlm:active{transform:scale(0.95)}
.ctrlm svg{width:22px;height:22px;fill:white;stroke:none}
/* SLIDERS */
.fpsl{padding:0 24px 16px}
.slr{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.sll{font-size:11px;font-weight:600;color:var(--mu);width:44px;letter-spacing:.5px;text-transform:uppercase}
.slw{flex:1}
input[type=range]{-webkit-appearance:none;width:100%;height:3px;background:rgba(255,255,255,0.07);border-radius:2px;outline:none}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:linear-gradient(135deg,var(--pu),var(--pk));cursor:pointer}
.slv{font-size:11px;color:var(--pu);font-weight:600;width:34px;text-align:right}
/* LYRICS */
.fply{padding:0 24px 16px;display:none}
.fply.on{display:block}
.lyhd{font-size:11px;font-weight:700;color:var(--pu);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px}
.lybd{background:rgba(255,255,255,0.02);border:1px solid var(--b);border-radius:12px;padding:16px;font-size:14px;line-height:1.9;color:var(--mu);max-height:180px;overflow-y:auto;text-align:center}
/* EQ */
.fpeq{padding:0 24px 16px;display:none}
.fpeq.on{display:block}
.eqhd{font-size:11px;font-weight:700;color:var(--pu);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px}
.eqps{display:flex;gap:8px;overflow-x:auto;padding-bottom:10px;scrollbar-width:none}
.eqps::-webkit-scrollbar{display:none}
.eqp{flex-shrink:0;padding:6px 14px;border:1px solid var(--b);border-radius:20px;background:transparent;color:var(--mu);font-size:12px;cursor:pointer;font-family:'Inter',sans-serif;font-weight:500;transition:all .2s}
.eqp.on{background:linear-gradient(135deg,var(--pu),var(--pk));border-color:transparent;color:#fff}
/* SEARCH */
.si{padding:8px 16px 0}
.sw2{position:relative;margin-bottom:16px}
.sinp{width:100%;padding:13px 44px;background:var(--card);border:1px solid var(--b);border-radius:12px;color:var(--tx);font-size:14px;font-family:'Inter',sans-serif;outline:none;transition:border-color .2s}
.sinp:focus{border-color:rgba(139,92,246,.4)}
.sico2{position:absolute;left:14px;top:50%;transform:translateY(-50%)}
.sico2 svg{width:17px;height:17px;stroke:var(--mu);fill:none;stroke-width:1.8}
.smic{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;display:flex;cursor:pointer}
.smic svg{width:17px;height:17px;stroke:var(--mu);fill:none;stroke-width:1.8}
.lr{display:flex;gap:8px;overflow-x:auto;padding-bottom:14px;scrollbar-width:none}
.lr::-webkit-scrollbar{display:none}
.lch{flex-shrink:0;padding:7px 14px;border:1px solid var(--b);border-radius:20px;background:transparent;color:var(--mu);font-size:12px;cursor:pointer;font-family:'Inter',sans-serif;font-weight:500;white-space:nowrap;transition:all .2s}
.lch.on{background:var(--pu);border-color:var(--pu);color:#fff}
.stabs{display:flex;background:var(--card);border-radius:10px;padding:3px;margin-bottom:14px}
.stab{flex:1;padding:7px 4px;background:none;border:none;color:var(--mu);font-size:12px;cursor:pointer;border-radius:8px;font-family:'Inter',sans-serif;font-weight:600;transition:all .2s}
.stab.on{background:var(--pu);color:#fff}
.trs{margin-bottom:20px}
.trl{font-size:11px;font-weight:700;color:var(--mu);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px}
.trtags{display:flex;flex-wrap:wrap;gap:8px}
.tt{padding:7px 14px;background:var(--card);border-radius:20px;font-size:12px;color:var(--mu);cursor:pointer;border:1px solid var(--b);font-weight:500;transition:all .2s}
.tt:active{background:var(--card2);color:var(--pu)}
.ri{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--b);cursor:pointer}
.ri:last-child{border-bottom:none}
.rith{width:48px;height:48px;border-radius:8px;background:var(--card2);flex-shrink:0;overflow:hidden;display:flex;align-items:center;justify-content:center}
.rith img{width:100%;height:100%;object-fit:cover}
.rith svg{width:18px;height:18px;stroke:var(--mu);fill:none;stroke-width:1.5}
.rii{flex:1;min-width:0}
.rin{font-size:14px;font-weight:600;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ris{font-size:12px;color:var(--mu);margin-top:1px}
.rim{background:none;border:none;color:var(--mu);font-size:20px;cursor:pointer;padding:4px;line-height:1}
/* LIBRARY */
.li{padding:8px 16px 0}
.ls{margin-bottom:24px}
.lt{font-size:12px;font-weight:700;color:var(--tx);letter-spacing:.8px;text-transform:uppercase;margin-bottom:14px}
.sg{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.sb2{background:var(--card);border:1px solid var(--b);border-radius:12px;padding:16px;text-align:center}
.sn{font-family:'Orbitron',sans-serif;font-size:22px;font-weight:700;background:linear-gradient(135deg,var(--pu),var(--pk));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.sl{font-size:11px;color:var(--mu);margin-top:3px;font-weight:500}
.stb{display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,rgba(139,92,246,.1),rgba(217,70,239,.05));border:1px solid rgba(139,92,246,.18);border-radius:12px;padding:16px;margin-bottom:16px}
.stn{font-family:'Orbitron',sans-serif;font-size:24px;font-weight:700;color:#f97316}
.stt{font-size:12px;color:var(--mu);font-weight:500}
.cpl{width:100%;padding:13px;background:rgba(139,92,246,.07);border:1px dashed rgba(139,92,246,.28);border-radius:12px;color:var(--pu);font-family:'Inter',sans-serif;font-size:13px;font-weight:600;cursor:pointer;margin-bottom:14px;letter-spacing:.3px;transition:background .2s}
.cpl:active{background:rgba(139,92,246,.14)}
/* PROFILE */
.pi{padding:8px 16px 0}
.ph{text-align:center;margin-bottom:28px;padding-top:8px}
.pav{width:78px;height:78px;border-radius:50%;background:linear-gradient(135deg,var(--pu),var(--pk));margin:0 auto 12px;display:flex;align-items:center;justify-content:center;border:2px solid rgba(139,92,246,.25);box-shadow:0 8px 32px rgba(139,92,246,.25)}
.pav svg{width:34px;height:34px;stroke:#fff;fill:none;stroke-width:1.5}
.pname{font-family:'Orbitron',sans-serif;font-size:17px;font-weight:700;margin-bottom:4px}
.pemail{font-size:13px;color:var(--mu)}
.plist{list-style:none}
.pi2{display:flex;align-items:center;gap:14px;padding:15px;background:var(--card);border-radius:12px;margin-bottom:8px;cursor:pointer;border:1px solid var(--b);transition:background .15s}
.pi2:active{background:var(--card2)}
.piicon{width:34px;height:34px;border-radius:8px;background:rgba(139,92,246,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.piicon svg{width:17px;height:17px;stroke:var(--pu);fill:none;stroke-width:1.8}
.pilbl{flex:1;font-size:14px;font-weight:500;color:var(--tx)}
.piarr svg{width:15px;height:15px;stroke:var(--mu);fill:none;stroke-width:2}
.logoutb{width:100%;padding:14px;background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.18);border-radius:12px;color:#ef4444;font-family:'Inter',sans-serif;font-size:13px;font-weight:600;cursor:pointer;margin-top:20px;letter-spacing:.3px}
/* SONG MENU */
.smbg{position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.72);display:none;align-items:flex-end;backdrop-filter:blur(4px)}
.smbg.on{display:flex}
.smb{width:100%;background:var(--sf);border-radius:20px 20px 0 0;border-top:1px solid var(--b);padding-bottom:calc(16px + env(safe-area-inset-bottom))}
.smh{width:36px;height:
