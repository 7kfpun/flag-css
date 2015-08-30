# Flag-css

CSS for SVG country flag icons with PNG fallback (all alpha-2, alpha-3, numeric, IOC and FIFA are all supported). See the [demo](http://7kfpun.github.io/flag-css/).

> As a backend developer, I prefer **ISO_3166-1 alpha-3**.

- Including all world flags (over 250 flags)
- Images are vectors - they are scalable
- All flags from [Wikimedia](http://commons.wikimedia.org/wiki/Category:SVG_sovereign_state_flags)
- Use [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1), all alpha-2, alpha-3 and numeric are supported
- [IOC](https://en.wikipedia.org/wiki/List_of_IOC_country_codes) and [FIFA](https://en.wikipedia.org/wiki/List_of_FIFA_country_codes) are also supported
- Respect flag's original ratio
- Flag-css CSS, LESS, and Sass files are licensed under the MIT License

## Install

    bower:

        bower install --save flag-css

## Or download

- [Flag-css (full)](dist/archive.zip)
- [Flag-css (without .png files)](dist/archive-nopng.zip)

## Usage

For using the flags inline with text add the classes `.flag` with `.flag-xxx` or `.flag-xx` (where `xxx` is the
[ISO 3166-1-alpha-3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) or [ISO 3166-1-numeric](http://en.wikipedia.org/wiki/ISO_3166-1_numeric) and xx is the [ISO 3166-1-alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of a country) to an empty `<span>`. Or using `flag-ioc-xxx` or `flag-fifa-xxx` (where `xxx` either the [IOC](https://en.wikipedia.org/wiki/List_of_IOC_country_codes) or [FIFA](https://en.wikipedia.org/wiki/List_of_FIFA_country_codes) of a country). Example:

    <span class="flag flag-hkg"></span>
    <span class="flag flag-hk"></span>
    <span class="flag flag-344"></span>
    <span class="flag flag-ioc-hkg"></span>
    <span class="flag flag-fifa-hkg"></span>

### Sizing

    <span class="flag flag-hkg flag-2x"></span>
    <span class="flag flag-hkg flag-3x"></span>
    <span class="flag flag-hkg flag-4x"></span>
                      ⋮
                      ⋮
    <span class="flag flag-hkg flag-10x"></span>

### Rotating and flipping

    <span class="flag flag-hkg flag-rotate-90"></span>
    <span class="flag flag-hkg flag-rotate-180"></span>
    <span class="flag flag-hkg flag-rotate-270"></span>
    <span class="flag flag-hkg flag-flip-horizontal"></span>
    <span class="flag flag-hkg flag-flip-vertical"></span>

## Flag list

| Flag                        | Element | Alpha 3 | Alpha 2 | Numeric | IOC | FIFA |
| --------------------------- |:-------:|:-------:|:-------:|:-------:|:---:|:----:|
| ![](dist/flags/png/abw.png) | `<span class="flag flag-abw"></span>` | abw | aw | 533 | aru | aru |
| ![](dist/flags/png/afg.png) | `<span class="flag flag-afg"></span>` | afg | af | 4 | afg | afg |
| ![](dist/flags/png/ago.png) | `<span class="flag flag-ago"></span>` | ago | ao | 24 | ang | ang |
| ![](dist/flags/png/aia.png) | `<span class="flag flag-aia"></span>` | aia | ai | 660 | aia | aia |
| ![](dist/flags/png/ala.png) | `<span class="flag flag-ala"></span>` | ala | ax | 248 |  | ald |
| ![](dist/flags/png/alb.png) | `<span class="flag flag-alb"></span>` | alb | al | 8 | alb | alb |
| ![](dist/flags/png/and.png) | `<span class="flag flag-and"></span>` | and | ad | 20 | and | and |
| ![](dist/flags/png/are.png) | `<span class="flag flag-are"></span>` | are | ae | 784 | uae | uae |
| ![](dist/flags/png/arg.png) | `<span class="flag flag-arg"></span>` | arg | ar | 32 | arg | arg |
| ![](dist/flags/png/arm.png) | `<span class="flag flag-arm"></span>` | arm | am | 51 | arm | arm |
| ![](dist/flags/png/asm.png) | `<span class="flag flag-asm"></span>` | asm | as | 16 | asa | asa |
| ![](dist/flags/png/ata.png) | `<span class="flag flag-ata"></span>` | ata | aq | 10 |  | ros |
| ![](dist/flags/png/atf.png) | `<span class="flag flag-atf"></span>` | atf | tf | 260 |  |  |
| ![](dist/flags/png/atg.png) | `<span class="flag flag-atg"></span>` | atg | ag | 28 | ant | atg |
| ![](dist/flags/png/aus.png) | `<span class="flag flag-aus"></span>` | aus | au | 36 | aus | aus |
| ![](dist/flags/png/aut.png) | `<span class="flag flag-aut"></span>` | aut | at | 40 | aut | aut |
| ![](dist/flags/png/aze.png) | `<span class="flag flag-aze"></span>` | aze | az | 31 | aze | aze |
| ![](dist/flags/png/bdi.png) | `<span class="flag flag-bdi"></span>` | bdi | bi | 108 | bdi | bdi |
| ![](dist/flags/png/bel.png) | `<span class="flag flag-bel"></span>` | bel | be | 56 | bel | bel |
| ![](dist/flags/png/ben.png) | `<span class="flag flag-ben"></span>` | ben | bj | 204 | ben | ben |
| ![](dist/flags/png/bes.png) | `<span class="flag flag-bes"></span>` | bes | bq | 535 | aho | ant |
| ![](dist/flags/png/bfa.png) | `<span class="flag flag-bfa"></span>` | bfa | bf | 854 | bur | bfa |
| ![](dist/flags/png/bgd.png) | `<span class="flag flag-bgd"></span>` | bgd | bd | 50 | ban | ban |
| ![](dist/flags/png/bgr.png) | `<span class="flag flag-bgr"></span>` | bgr | bg | 100 | bul | bul |
| ![](dist/flags/png/bhr.png) | `<span class="flag flag-bhr"></span>` | bhr | bh | 48 | brn | bhr |
| ![](dist/flags/png/bhs.png) | `<span class="flag flag-bhs"></span>` | bhs | bs | 44 | bah | bah |
| ![](dist/flags/png/bih.png) | `<span class="flag flag-bih"></span>` | bih | ba | 70 | bih | bih |
| ![](dist/flags/png/blm.png) | `<span class="flag flag-blm"></span>` | blm | bl | 652 |  |  |
| ![](dist/flags/png/blr.png) | `<span class="flag flag-blr"></span>` | blr | by | 112 | blr | blr |
| ![](dist/flags/png/blz.png) | `<span class="flag flag-blz"></span>` | blz | bz | 84 | biz | blz |
| ![](dist/flags/png/bmu.png) | `<span class="flag flag-bmu"></span>` | bmu | bm | 60 | ber | ber |
| ![](dist/flags/png/bol.png) | `<span class="flag flag-bol"></span>` | bol | bo | 68 | bol | bol |
| ![](dist/flags/png/bra.png) | `<span class="flag flag-bra"></span>` | bra | br | 76 | bra | bra |
| ![](dist/flags/png/brb.png) | `<span class="flag flag-brb"></span>` | brb | bb | 52 | bar | brb |
| ![](dist/flags/png/brn.png) | `<span class="flag flag-brn"></span>` | brn | bn | 96 | bru | bru |
| ![](dist/flags/png/btn.png) | `<span class="flag flag-btn"></span>` | btn | bt | 64 | bhu | bhu |
| ![](dist/flags/png/bvt.png) | `<span class="flag flag-bvt"></span>` | bvt | bv | 74 |  |  |
| ![](dist/flags/png/bwa.png) | `<span class="flag flag-bwa"></span>` | bwa | bw | 72 | bot | bot |
| ![](dist/flags/png/caf.png) | `<span class="flag flag-caf"></span>` | caf | cf | 140 | caf | cta |
| ![](dist/flags/png/can.png) | `<span class="flag flag-can"></span>` | can | ca | 124 | can | can |
| ![](dist/flags/png/cck.png) | `<span class="flag flag-cck"></span>` | cck | cc | 166 |  | cck |
| ![](dist/flags/png/che.png) | `<span class="flag flag-che"></span>` | che | ch | 756 | sui | sui |
| ![](dist/flags/png/chl.png) | `<span class="flag flag-chl"></span>` | chl | cl | 152 | chi | chi |
| ![](dist/flags/png/chn.png) | `<span class="flag flag-chn"></span>` | chn | cn | 156 | chn | chn |
| ![](dist/flags/png/civ.png) | `<span class="flag flag-civ"></span>` | civ | ci | 384 | civ | civ |
| ![](dist/flags/png/cmr.png) | `<span class="flag flag-cmr"></span>` | cmr | cm | 120 | cmr | cmr |
| ![](dist/flags/png/cod.png) | `<span class="flag flag-cod"></span>` | cod | cd | 180 | cod | cod |
| ![](dist/flags/png/cog.png) | `<span class="flag flag-cog"></span>` | cog | cg | 178 | cgo | cgo |
| ![](dist/flags/png/cok.png) | `<span class="flag flag-cok"></span>` | cok | ck | 184 | cok | cok |
| ![](dist/flags/png/col.png) | `<span class="flag flag-col"></span>` | col | co | 170 | col | col |
| ![](dist/flags/png/com.png) | `<span class="flag flag-com"></span>` | com | km | 174 | com | com |
| ![](dist/flags/png/cpv.png) | `<span class="flag flag-cpv"></span>` | cpv | cv | 132 | cpv | cpv |
| ![](dist/flags/png/cri.png) | `<span class="flag flag-cri"></span>` | cri | cr | 188 | crc | crc |
| ![](dist/flags/png/cub.png) | `<span class="flag flag-cub"></span>` | cub | cu | 192 | cub | cub |
| ![](dist/flags/png/cuw.png) | `<span class="flag flag-cuw"></span>` | cuw | cw | 531 |  |  |
| ![](dist/flags/png/cxr.png) | `<span class="flag flag-cxr"></span>` | cxr | cx | 162 |  | cxr |
| ![](dist/flags/png/cym.png) | `<span class="flag flag-cym"></span>` | cym | ky | 136 | cay | cay |
| ![](dist/flags/png/cyp.png) | `<span class="flag flag-cyp"></span>` | cyp | cy | 196 | cyp | cyp |
| ![](dist/flags/png/cze.png) | `<span class="flag flag-cze"></span>` | cze | cz | 203 | cze | cze |
| ![](dist/flags/png/deu.png) | `<span class="flag flag-deu"></span>` | deu | de | 276 | ger | ger |
| ![](dist/flags/png/dji.png) | `<span class="flag flag-dji"></span>` | dji | dj | 262 | dji | dji |
| ![](dist/flags/png/dma.png) | `<span class="flag flag-dma"></span>` | dma | dm | 212 | dma | dma |
| ![](dist/flags/png/dnk.png) | `<span class="flag flag-dnk"></span>` | dnk | dk | 208 | den | den |
| ![](dist/flags/png/dom.png) | `<span class="flag flag-dom"></span>` | dom | do | 214 | dom | dom |
| ![](dist/flags/png/dza.png) | `<span class="flag flag-dza"></span>` | dza | dz | 12 | alg | alg |
| ![](dist/flags/png/ecu.png) | `<span class="flag flag-ecu"></span>` | ecu | ec | 218 | ecu | ecu |
| ![](dist/flags/png/egy.png) | `<span class="flag flag-egy"></span>` | egy | eg | 818 | egy | egy |
| ![](dist/flags/png/eri.png) | `<span class="flag flag-eri"></span>` | eri | er | 232 | eri | eri |
| ![](dist/flags/png/esh.png) | `<span class="flag flag-esh"></span>` | esh | eh | 732 |  | sah |
| ![](dist/flags/png/esp.png) | `<span class="flag flag-esp"></span>` | esp | es | 724 | esp | esp |
| ![](dist/flags/png/est.png) | `<span class="flag flag-est"></span>` | est | ee | 233 | est | est |
| ![](dist/flags/png/eth.png) | `<span class="flag flag-eth"></span>` | eth | et | 231 | eth | eth |
| ![](dist/flags/png/fin.png) | `<span class="flag flag-fin"></span>` | fin | fi | 246 | fin | fin |
| ![](dist/flags/png/fji.png) | `<span class="flag flag-fji"></span>` | fji | fj | 242 | fij | fij |
| ![](dist/flags/png/flk.png) | `<span class="flag flag-flk"></span>` | flk | fk | 238 | flk | flk |
| ![](dist/flags/png/fra.png) | `<span class="flag flag-fra"></span>` | fra | fr | 250 | fra | fra |
| ![](dist/flags/png/fro.png) | `<span class="flag flag-fro"></span>` | fro | fo | 234 | far | fro |
| ![](dist/flags/png/fsm.png) | `<span class="flag flag-fsm"></span>` | fsm | fm | 583 | fsm | fsm |
| ![](dist/flags/png/gab.png) | `<span class="flag flag-gab"></span>` | gab | ga | 266 | gab | gab |
| ![](dist/flags/png/gbr.png) | `<span class="flag flag-gbr"></span>` | gbr | gb | 826 | gbr |  |
| ![](dist/flags/png/geo.png) | `<span class="flag flag-geo"></span>` | geo | ge | 268 | geo | geo |
| ![](dist/flags/png/ggy.png) | `<span class="flag flag-ggy"></span>` | ggy | gg | 831 |  | gbg |
| ![](dist/flags/png/gha.png) | `<span class="flag flag-gha"></span>` | gha | gh | 288 | gha | gha |
| ![](dist/flags/png/gib.png) | `<span class="flag flag-gib"></span>` | gib | gi | 292 | gib | gbz |
| ![](dist/flags/png/gin.png) | `<span class="flag flag-gin"></span>` | gin | gn | 324 | gui | gui |
| ![](dist/flags/png/glp.png) | `<span class="flag flag-glp"></span>` | glp | gp | 312 | gud | glp |
| ![](dist/flags/png/gmb.png) | `<span class="flag flag-gmb"></span>` | gmb | gm | 270 | gam | gam |
| ![](dist/flags/png/gnb.png) | `<span class="flag flag-gnb"></span>` | gnb | gw | 624 | gbs | gnb |
| ![](dist/flags/png/gnq.png) | `<span class="flag flag-gnq"></span>` | gnq | gq | 226 | geq | eqg |
| ![](dist/flags/png/grc.png) | `<span class="flag flag-grc"></span>` | grc | gr | 300 | gre | gre |
| ![](dist/flags/png/grd.png) | `<span class="flag flag-grd"></span>` | grd | gd | 308 | grn | grn |
| ![](dist/flags/png/grl.png) | `<span class="flag flag-grl"></span>` | grl | gl | 304 | grl | grl |
| ![](dist/flags/png/gtm.png) | `<span class="flag flag-gtm"></span>` | gtm | gt | 320 | gua | gua |
| ![](dist/flags/png/guf.png) | `<span class="flag flag-guf"></span>` | guf | gf | 254 | fgu | guf |
| ![](dist/flags/png/gum.png) | `<span class="flag flag-gum"></span>` | gum | gu | 316 | gum | gum |
| ![](dist/flags/png/guy.png) | `<span class="flag flag-guy"></span>` | guy | gy | 328 | guy | guy |
| ![](dist/flags/png/hkg.png) | `<span class="flag flag-hkg"></span>` | hkg | hk | 344 | hkg | hkg |
| ![](dist/flags/png/hmd.png) | `<span class="flag flag-hmd"></span>` | hmd | hm | 334 |  |  |
| ![](dist/flags/png/hnd.png) | `<span class="flag flag-hnd"></span>` | hnd | hn | 340 | hon | hon |
| ![](dist/flags/png/hrv.png) | `<span class="flag flag-hrv"></span>` | hrv | hr | 191 | cro | cro |
| ![](dist/flags/png/hti.png) | `<span class="flag flag-hti"></span>` | hti | ht | 332 | hai | hai |
| ![](dist/flags/png/hun.png) | `<span class="flag flag-hun"></span>` | hun | hu | 348 | hun | hun |
| ![](dist/flags/png/idn.png) | `<span class="flag flag-idn"></span>` | idn | id | 360 | ina | idn |
| ![](dist/flags/png/imn.png) | `<span class="flag flag-imn"></span>` | imn | im | 833 |  | gbm |
| ![](dist/flags/png/ind.png) | `<span class="flag flag-ind"></span>` | ind | in | 356 | ind | ind |
| ![](dist/flags/png/iot.png) | `<span class="flag flag-iot"></span>` | iot | io | 86 |  |  |
| ![](dist/flags/png/irl.png) | `<span class="flag flag-irl"></span>` | irl | ie | 372 | irl | irl |
| ![](dist/flags/png/irn.png) | `<span class="flag flag-irn"></span>` | irn | ir | 364 | iri | irn |
| ![](dist/flags/png/irq.png) | `<span class="flag flag-irq"></span>` | irq | iq | 368 | irq | irq |
| ![](dist/flags/png/isl.png) | `<span class="flag flag-isl"></span>` | isl | is | 352 | isl | isl |
| ![](dist/flags/png/isr.png) | `<span class="flag flag-isr"></span>` | isr | il | 376 | isr | isr |
| ![](dist/flags/png/ita.png) | `<span class="flag flag-ita"></span>` | ita | it | 380 | ita | ita |
| ![](dist/flags/png/jam.png) | `<span class="flag flag-jam"></span>` | jam | jm | 388 | jam | jam |
| ![](dist/flags/png/jey.png) | `<span class="flag flag-jey"></span>` | jey | je | 832 |  | gbj |
| ![](dist/flags/png/jor.png) | `<span class="flag flag-jor"></span>` | jor | jo | 400 | jor | jor |
| ![](dist/flags/png/jpn.png) | `<span class="flag flag-jpn"></span>` | jpn | jp | 392 | jpn | jpn |
| ![](dist/flags/png/kaz.png) | `<span class="flag flag-kaz"></span>` | kaz | kz | 398 | kaz | kaz |
| ![](dist/flags/png/ken.png) | `<span class="flag flag-ken"></span>` | ken | ke | 404 | ken | ken |
| ![](dist/flags/png/kgz.png) | `<span class="flag flag-kgz"></span>` | kgz | kg | 417 | kgz | kgz |
| ![](dist/flags/png/khm.png) | `<span class="flag flag-khm"></span>` | khm | kh | 116 | cam | cam |
| ![](dist/flags/png/kir.png) | `<span class="flag flag-kir"></span>` | kir | ki | 296 | kir | kir |
| ![](dist/flags/png/kna.png) | `<span class="flag flag-kna"></span>` | kna | kn | 659 | skn | skn |
| ![](dist/flags/png/kor.png) | `<span class="flag flag-kor"></span>` | kor | kr | 410 | kor | kor |
| ![](dist/flags/png/kwt.png) | `<span class="flag flag-kwt"></span>` | kwt | kw | 414 | kuw | kuw |
| ![](dist/flags/png/lao.png) | `<span class="flag flag-lao"></span>` | lao | la | 418 | lao | lao |
| ![](dist/flags/png/lbn.png) | `<span class="flag flag-lbn"></span>` | lbn | lb | 422 | lib | lib |
| ![](dist/flags/png/lbr.png) | `<span class="flag flag-lbr"></span>` | lbr | lr | 430 | lbr | lbr |
| ![](dist/flags/png/lby.png) | `<span class="flag flag-lby"></span>` | lby | ly | 434 | lba | lby |
| ![](dist/flags/png/lca.png) | `<span class="flag flag-lca"></span>` | lca | lc | 662 | lca | lca |
| ![](dist/flags/png/lie.png) | `<span class="flag flag-lie"></span>` | lie | li | 438 | lie | lie |
| ![](dist/flags/png/lka.png) | `<span class="flag flag-lka"></span>` | lka | lk | 144 | sri | sri |
| ![](dist/flags/png/lso.png) | `<span class="flag flag-lso"></span>` | lso | ls | 426 | les | les |
| ![](dist/flags/png/ltu.png) | `<span class="flag flag-ltu"></span>` | ltu | lt | 440 | ltu | ltu |
| ![](dist/flags/png/lux.png) | `<span class="flag flag-lux"></span>` | lux | lu | 442 | lux | lux |
| ![](dist/flags/png/lva.png) | `<span class="flag flag-lva"></span>` | lva | lv | 428 | lat | lva |
| ![](dist/flags/png/mac.png) | `<span class="flag flag-mac"></span>` | mac | mo | 446 | mac | mac |
| ![](dist/flags/png/maf.png) | `<span class="flag flag-maf"></span>` | maf | mf | 663 |  |  |
| ![](dist/flags/png/mar.png) | `<span class="flag flag-mar"></span>` | mar | ma | 504 | mar | mar |
| ![](dist/flags/png/mco.png) | `<span class="flag flag-mco"></span>` | mco | mc | 492 | mon | mon |
| ![](dist/flags/png/mda.png) | `<span class="flag flag-mda"></span>` | mda | md | 498 | mda | mda |
| ![](dist/flags/png/mdg.png) | `<span class="flag flag-mdg"></span>` | mdg | mg | 450 | mad | mad |
| ![](dist/flags/png/mdv.png) | `<span class="flag flag-mdv"></span>` | mdv | mv | 462 | mdv | mdv |
| ![](dist/flags/png/mex.png) | `<span class="flag flag-mex"></span>` | mex | mx | 484 | mex | mex |
| ![](dist/flags/png/mhl.png) | `<span class="flag flag-mhl"></span>` | mhl | mh | 584 | msh | mhl |
| ![](dist/flags/png/mkd.png) | `<span class="flag flag-mkd"></span>` | mkd | mk | 807 | mkd | mkd |
| ![](dist/flags/png/mli.png) | `<span class="flag flag-mli"></span>` | mli | ml | 466 | mli | mli |
| ![](dist/flags/png/mlt.png) | `<span class="flag flag-mlt"></span>` | mlt | mt | 470 | mlt | mlt |
| ![](dist/flags/png/mmr.png) | `<span class="flag flag-mmr"></span>` | mmr | mm | 104 | mya | mya |
| ![](dist/flags/png/mne.png) | `<span class="flag flag-mne"></span>` | mne | me | 499 | mgo | mne |
| ![](dist/flags/png/mng.png) | `<span class="flag flag-mng"></span>` | mng | mn | 496 | mgl | mng |
| ![](dist/flags/png/mnp.png) | `<span class="flag flag-mnp"></span>` | mnp | mp | 580 | nma | nmi |
| ![](dist/flags/png/moz.png) | `<span class="flag flag-moz"></span>` | moz | mz | 508 | moz | moz |
| ![](dist/flags/png/mrt.png) | `<span class="flag flag-mrt"></span>` | mrt | mr | 478 | mtn | mtn |
| ![](dist/flags/png/msr.png) | `<span class="flag flag-msr"></span>` | msr | ms | 500 | mnt | msr |
| ![](dist/flags/png/mtq.png) | `<span class="flag flag-mtq"></span>` | mtq | mq | 474 | mrt | mtq |
| ![](dist/flags/png/mus.png) | `<span class="flag flag-mus"></span>` | mus | mu | 480 | mri | mri |
| ![](dist/flags/png/mwi.png) | `<span class="flag flag-mwi"></span>` | mwi | mw | 454 | maw | mwi |
| ![](dist/flags/png/mys.png) | `<span class="flag flag-mys"></span>` | mys | my | 458 | mas | mas |
| ![](dist/flags/png/myt.png) | `<span class="flag flag-myt"></span>` | myt | yt | 175 | may | myt |
| ![](dist/flags/png/nam.png) | `<span class="flag flag-nam"></span>` | nam | na | 516 | nam | nam |
| ![](dist/flags/png/ncl.png) | `<span class="flag flag-ncl"></span>` | ncl | nc | 540 | ncd | ncl |
| ![](dist/flags/png/ner.png) | `<span class="flag flag-ner"></span>` | ner | ne | 562 | nig | nig |
| ![](dist/flags/png/nfk.png) | `<span class="flag flag-nfk"></span>` | nfk | nf | 574 | nfi | nfk |
| ![](dist/flags/png/nga.png) | `<span class="flag flag-nga"></span>` | nga | ng | 566 | ngr | nga |
| ![](dist/flags/png/nic.png) | `<span class="flag flag-nic"></span>` | nic | ni | 558 | nca | nca |
| ![](dist/flags/png/niu.png) | `<span class="flag flag-niu"></span>` | niu | nu | 570 | niu | niu |
| ![](dist/flags/png/nld.png) | `<span class="flag flag-nld"></span>` | nld | nl | 528 | ned | ned |
| ![](dist/flags/png/nor.png) | `<span class="flag flag-nor"></span>` | nor | no | 578 | nor | nor |
| ![](dist/flags/png/npl.png) | `<span class="flag flag-npl"></span>` | npl | np | 524 | nep | nep |
| ![](dist/flags/png/nru.png) | `<span class="flag flag-nru"></span>` | nru | nr | 520 | nru | nru |
| ![](dist/flags/png/nzl.png) | `<span class="flag flag-nzl"></span>` | nzl | nz | 554 | nzl | nzl |
| ![](dist/flags/png/omn.png) | `<span class="flag flag-omn"></span>` | omn | om | 512 | oma | oma |
| ![](dist/flags/png/pak.png) | `<span class="flag flag-pak"></span>` | pak | pk | 586 | pak | pak |
| ![](dist/flags/png/pan.png) | `<span class="flag flag-pan"></span>` | pan | pa | 591 | pan | pan |
| ![](dist/flags/png/pcn.png) | `<span class="flag flag-pcn"></span>` | pcn | pn | 612 |  | pcn |
| ![](dist/flags/png/per.png) | `<span class="flag flag-per"></span>` | per | pe | 604 | per | per |
| ![](dist/flags/png/phl.png) | `<span class="flag flag-phl"></span>` | phl | ph | 608 | phi | phi |
| ![](dist/flags/png/plw.png) | `<span class="flag flag-plw"></span>` | plw | pw | 585 | plw | plw |
| ![](dist/flags/png/png.png) | `<span class="flag flag-png"></span>` | png | pg | 598 | png | png |
| ![](dist/flags/png/pol.png) | `<span class="flag flag-pol"></span>` | pol | pl | 616 | pol | pol |
| ![](dist/flags/png/pri.png) | `<span class="flag flag-pri"></span>` | pri | pr | 630 | pur | pur |
| ![](dist/flags/png/prk.png) | `<span class="flag flag-prk"></span>` | prk | kp | 408 | prk | prk |
| ![](dist/flags/png/prt.png) | `<span class="flag flag-prt"></span>` | prt | pt | 620 | por | por |
| ![](dist/flags/png/pry.png) | `<span class="flag flag-pry"></span>` | pry | py | 600 | par | par |
| ![](dist/flags/png/pse.png) | `<span class="flag flag-pse"></span>` | pse | ps | 275 | ple | ple |
| ![](dist/flags/png/pyf.png) | `<span class="flag flag-pyf"></span>` | pyf | pf | 258 | fpo | tah2 |
| ![](dist/flags/png/qat.png) | `<span class="flag flag-qat"></span>` | qat | qa | 634 | qat | qat |
| ![](dist/flags/png/reu.png) | `<span class="flag flag-reu"></span>` | reu | re | 638 | reu | reu |
| ![](dist/flags/png/rou.png) | `<span class="flag flag-rou"></span>` | rou | ro | 642 | rou | rou |
| ![](dist/flags/png/rus.png) | `<span class="flag flag-rus"></span>` | rus | ru | 643 | rus | rus |
| ![](dist/flags/png/rwa.png) | `<span class="flag flag-rwa"></span>` | rwa | rw | 646 | rwa | rwa |
| ![](dist/flags/png/sau.png) | `<span class="flag flag-sau"></span>` | sau | sa | 682 | ksa | ksa |
| ![](dist/flags/png/sdn.png) | `<span class="flag flag-sdn"></span>` | sdn | sd | 729 | sud | sud |
| ![](dist/flags/png/sen.png) | `<span class="flag flag-sen"></span>` | sen | sn | 686 | sen | sen |
| ![](dist/flags/png/sgp.png) | `<span class="flag flag-sgp"></span>` | sgp | sg | 702 | sin | sin |
| ![](dist/flags/png/sgs.png) | `<span class="flag flag-sgs"></span>` | sgs | gs | 239 |  |  |
| ![](dist/flags/png/shn.png) | `<span class="flag flag-shn"></span>` | shn | sh | 654 | hel | shn |
| ![](dist/flags/png/sjm.png) | `<span class="flag flag-sjm"></span>` | sjm | sj | 744 |  |  |
| ![](dist/flags/png/slb.png) | `<span class="flag flag-slb"></span>` | slb | sb | 90 | sol | sol |
| ![](dist/flags/png/sle.png) | `<span class="flag flag-sle"></span>` | sle | sl | 694 | sle | sle |
| ![](dist/flags/png/slv.png) | `<span class="flag flag-slv"></span>` | slv | sv | 222 | esa | slv |
| ![](dist/flags/png/smr.png) | `<span class="flag flag-smr"></span>` | smr | sm | 674 | smr | smr |
| ![](dist/flags/png/som.png) | `<span class="flag flag-som"></span>` | som | so | 706 | som | som |
| ![](dist/flags/png/spm.png) | `<span class="flag flag-spm"></span>` | spm | pm | 666 | spm | spm |
| ![](dist/flags/png/srb.png) | `<span class="flag flag-srb"></span>` | srb | rs | 688 | srb | srb |
| ![](dist/flags/png/ssd.png) | `<span class="flag flag-ssd"></span>` | ssd | ss | 728 |  |  |
| ![](dist/flags/png/stp.png) | `<span class="flag flag-stp"></span>` | stp | st | 678 | stp | stp |
| ![](dist/flags/png/sur.png) | `<span class="flag flag-sur"></span>` | sur | sr | 740 | sur | sur |
| ![](dist/flags/png/svk.png) | `<span class="flag flag-svk"></span>` | svk | sk | 703 | svk | svk |
| ![](dist/flags/png/svn.png) | `<span class="flag flag-svn"></span>` | svn | si | 705 | slo | svn |
| ![](dist/flags/png/swe.png) | `<span class="flag flag-swe"></span>` | swe | se | 752 | swe | swe |
| ![](dist/flags/png/swz.png) | `<span class="flag flag-swz"></span>` | swz | sz | 748 | swz | swz |
| ![](dist/flags/png/sxm.png) | `<span class="flag flag-sxm"></span>` | sxm | sx | 534 |  |  |
| ![](dist/flags/png/syc.png) | `<span class="flag flag-syc"></span>` | syc | sc | 690 | sey | sey |
| ![](dist/flags/png/syr.png) | `<span class="flag flag-syr"></span>` | syr | sy | 760 | syr | syr |
| ![](dist/flags/png/tca.png) | `<span class="flag flag-tca"></span>` | tca | tc | 796 | tks | tca |
| ![](dist/flags/png/tcd.png) | `<span class="flag flag-tcd"></span>` | tcd | td | 148 | cha | cha |
| ![](dist/flags/png/tgo.png) | `<span class="flag flag-tgo"></span>` | tgo | tg | 768 | tog | tog |
| ![](dist/flags/png/tha.png) | `<span class="flag flag-tha"></span>` | tha | th | 764 | tha | tha |
| ![](dist/flags/png/tjk.png) | `<span class="flag flag-tjk"></span>` | tjk | tj | 762 | tjk | tjk |
| ![](dist/flags/png/tkl.png) | `<span class="flag flag-tkl"></span>` | tkl | tk | 772 |  | tkl |
| ![](dist/flags/png/tkm.png) | `<span class="flag flag-tkm"></span>` | tkm | tm | 795 | tkm | tkm |
| ![](dist/flags/png/tls.png) | `<span class="flag flag-tls"></span>` | tls | tl | 626 | tls | tls |
| ![](dist/flags/png/ton.png) | `<span class="flag flag-ton"></span>` | ton | to | 776 | tga | tga |
| ![](dist/flags/png/tto.png) | `<span class="flag flag-tto"></span>` | tto | tt | 780 | tto | tri |
| ![](dist/flags/png/tun.png) | `<span class="flag flag-tun"></span>` | tun | tn | 788 | tun | tun |
| ![](dist/flags/png/tur.png) | `<span class="flag flag-tur"></span>` | tur | tr | 792 | tur | tur |
| ![](dist/flags/png/tuv.png) | `<span class="flag flag-tuv"></span>` | tuv | tv | 798 | tuv | tuv |
| ![](dist/flags/png/twn.png) | `<span class="flag flag-twn"></span>` | twn | tw | 158 | tpe | tpe |
| ![](dist/flags/png/tza.png) | `<span class="flag flag-tza"></span>` | tza | tz | 834 | tan | tan |
| ![](dist/flags/png/uga.png) | `<span class="flag flag-uga"></span>` | uga | ug | 800 | uga | uga |
| ![](dist/flags/png/ukr.png) | `<span class="flag flag-ukr"></span>` | ukr | ua | 804 | ukr | ukr |
| ![](dist/flags/png/umi.png) | `<span class="flag flag-umi"></span>` | umi | um | 581 |  |  |
| ![](dist/flags/png/ury.png) | `<span class="flag flag-ury"></span>` | ury | uy | 858 | uru | uru |
| ![](dist/flags/png/usa.png) | `<span class="flag flag-usa"></span>` | usa | us | 840 | usa | usa |
| ![](dist/flags/png/uzb.png) | `<span class="flag flag-uzb"></span>` | uzb | uz | 860 | uzb | uzb |
| ![](dist/flags/png/vat.png) | `<span class="flag flag-vat"></span>` | vat | va | 336 |  | vat |
| ![](dist/flags/png/vct.png) | `<span class="flag flag-vct"></span>` | vct | vc | 670 | vin | vin |
| ![](dist/flags/png/ven.png) | `<span class="flag flag-ven"></span>` | ven | ve | 862 | ven | ven |
| ![](dist/flags/png/vgb.png) | `<span class="flag flag-vgb"></span>` | vgb | vg | 92 | ivb | vgb |
| ![](dist/flags/png/vir.png) | `<span class="flag flag-vir"></span>` | vir | vi | 850 | isv | vir |
| ![](dist/flags/png/vnm.png) | `<span class="flag flag-vnm"></span>` | vnm | vn | 704 | vie | vie |
| ![](dist/flags/png/vut.png) | `<span class="flag flag-vut"></span>` | vut | vu | 548 | van | van |
| ![](dist/flags/png/wlf.png) | `<span class="flag flag-wlf"></span>` | wlf | wf | 876 | waf | wlf |
| ![](dist/flags/png/wsm.png) | `<span class="flag flag-wsm"></span>` | wsm | ws | 882 | sam | sam |
| ![](dist/flags/png/yem.png) | `<span class="flag flag-yem"></span>` | yem | ye | 887 | yem | yem |
| ![](dist/flags/png/zaf.png) | `<span class="flag flag-zaf"></span>` | zaf | za | 710 | rsa | rsa |
| ![](dist/flags/png/zmb.png) | `<span class="flag flag-zmb"></span>` | zmb | zm | 894 | zam | zam |
| ![](dist/flags/png/zwe.png) | `<span class="flag flag-zwe"></span>` | zwe | zw | 716 | zim | zim |g

## Todo's

  - 3×4 flag ratio available

## License

MIT

## Development

Ubuntu:

    apt-get install imagemagick
    apt-get install graphicsmagick

Mac OS X (using Homebrew):

    brew install imagemagick
    brew install graphicsmagick
