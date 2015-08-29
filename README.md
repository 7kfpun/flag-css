# Flag-css

CSS for SVG country flags with PNG fallback. See the [demo](http://7kfpun.github.io/flag-css/).

> As a backend developer, I prefer **ISO_3166-1 alpha-3**.

  - All flags from [Wikimedia](http://commons.wikimedia.org/wiki/Category:SVG_sovereign_state_flags)
  - Use [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1), all alpha-2, alpha-3 and numeric are supported
  - [IOC](https://en.wikipedia.org/wiki/List_of_IOC_country_codes) and [FIFA](https://en.wikipedia.org/wiki/List_of_FIFA_country_codes) are also supported
  - Respect flag's original ratio
  - Flag-css CSS, LESS, and Sass files are licensed under the MIT License

## install

    bower:

        bower install --save flag-css

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

| Flag                   | Alpha 3 | Alpha 2 | Numeric | IOC | FIFA |
| ---------------------- |:-------:|:-------:|:-------:|:---:|:----:|
| ![](dist/flags/png/abw.png) | abw | aw | 533 | aru | aru |
| ![](dist/flags/png/afg.png) | afg | af | 4 | afg | afg |
| ![](dist/flags/png/ago.png) | ago | ao | 24 | ang | ang |
| ![](dist/flags/png/aia.png) | aia | ai | 660 | aia | aia |
| ![](dist/flags/png/ala.png) | ala | ax | 248 |  | ald |
| ![](dist/flags/png/alb.png) | alb | al | 8 | alb | alb |
| ![](dist/flags/png/and.png) | and | ad | 20 | and | and |
| ![](dist/flags/png/are.png) | are | ae | 784 | uae | uae |
| ![](dist/flags/png/arg.png) | arg | ar | 32 | arg | arg |
| ![](dist/flags/png/arm.png) | arm | am | 51 | arm | arm |
| ![](dist/flags/png/asm.png) | asm | as | 16 | asa | asa |
| ![](dist/flags/png/ata.png) | ata | aq | 10 |  | ros |
| ![](dist/flags/png/atf.png) | atf | tf | 260 |  |  |
| ![](dist/flags/png/atg.png) | atg | ag | 28 | ant | atg |
| ![](dist/flags/png/aus.png) | aus | au | 36 | aus | aus |
| ![](dist/flags/png/aut.png) | aut | at | 40 | aut | aut |
| ![](dist/flags/png/aze.png) | aze | az | 31 | aze | aze |
| ![](dist/flags/png/bdi.png) | bdi | bi | 108 | bdi | bdi |
| ![](dist/flags/png/bel.png) | bel | be | 56 | bel | bel |
| ![](dist/flags/png/ben.png) | ben | bj | 204 | ben | ben |
| ![](dist/flags/png/bes.png) | bes | bq | 535 | aho | ant |
| ![](dist/flags/png/bfa.png) | bfa | bf | 854 | bur | bfa |
| ![](dist/flags/png/bgd.png) | bgd | bd | 50 | ban | ban |
| ![](dist/flags/png/bgr.png) | bgr | bg | 100 | bul | bul |
| ![](dist/flags/png/bhr.png) | bhr | bh | 48 | brn | bhr |
| ![](dist/flags/png/bhs.png) | bhs | bs | 44 | bah | bah |
| ![](dist/flags/png/bih.png) | bih | ba | 70 | bih | bih |
| ![](dist/flags/png/blm.png) | blm | bl | 652 |  |  |
| ![](dist/flags/png/blr.png) | blr | by | 112 | blr | blr |
| ![](dist/flags/png/blz.png) | blz | bz | 84 | biz | blz |
| ![](dist/flags/png/bmu.png) | bmu | bm | 60 | ber | ber |
| ![](dist/flags/png/bol.png) | bol | bo | 68 | bol | bol |
| ![](dist/flags/png/bra.png) | bra | br | 76 | bra | bra |
| ![](dist/flags/png/brb.png) | brb | bb | 52 | bar | brb |
| ![](dist/flags/png/brn.png) | brn | bn | 96 | bru | bru |
| ![](dist/flags/png/btn.png) | btn | bt | 64 | bhu | bhu |
| ![](dist/flags/png/bvt.png) | bvt | bv | 74 |  |  |
| ![](dist/flags/png/bwa.png) | bwa | bw | 72 | bot | bot |
| ![](dist/flags/png/caf.png) | caf | cf | 140 | caf | cta |
| ![](dist/flags/png/can.png) | can | ca | 124 | can | can |
| ![](dist/flags/png/cck.png) | cck | cc | 166 |  | cck |
| ![](dist/flags/png/che.png) | che | ch | 756 | sui | sui |
| ![](dist/flags/png/chl.png) | chl | cl | 152 | chi | chi |
| ![](dist/flags/png/chn.png) | chn | cn | 156 | chn | chn |
| ![](dist/flags/png/civ.png) | civ | ci | 384 | civ | civ |
| ![](dist/flags/png/cmr.png) | cmr | cm | 120 | cmr | cmr |
| ![](dist/flags/png/cod.png) | cod | cd | 180 | cod | cod |
| ![](dist/flags/png/cog.png) | cog | cg | 178 | cgo | cgo |
| ![](dist/flags/png/cok.png) | cok | ck | 184 | cok | cok |
| ![](dist/flags/png/col.png) | col | co | 170 | col | col |
| ![](dist/flags/png/com.png) | com | km | 174 | com | com |
| ![](dist/flags/png/cpv.png) | cpv | cv | 132 | cpv | cpv |
| ![](dist/flags/png/cri.png) | cri | cr | 188 | crc | crc |
| ![](dist/flags/png/cub.png) | cub | cu | 192 | cub | cub |
| ![](dist/flags/png/cuw.png) | cuw | cw | 531 |  |  |
| ![](dist/flags/png/cxr.png) | cxr | cx | 162 |  | cxr |
| ![](dist/flags/png/cym.png) | cym | ky | 136 | cay | cay |
| ![](dist/flags/png/cyp.png) | cyp | cy | 196 | cyp | cyp |
| ![](dist/flags/png/cze.png) | cze | cz | 203 | cze | cze |
| ![](dist/flags/png/deu.png) | deu | de | 276 | ger | ger |
| ![](dist/flags/png/dji.png) | dji | dj | 262 | dji | dji |
| ![](dist/flags/png/dma.png) | dma | dm | 212 | dma | dma |
| ![](dist/flags/png/dnk.png) | dnk | dk | 208 | den | den |
| ![](dist/flags/png/dom.png) | dom | do | 214 | dom | dom |
| ![](dist/flags/png/dza.png) | dza | dz | 12 | alg | alg |
| ![](dist/flags/png/ecu.png) | ecu | ec | 218 | ecu | ecu |
| ![](dist/flags/png/egy.png) | egy | eg | 818 | egy | egy |
| ![](dist/flags/png/eri.png) | eri | er | 232 | eri | eri |
| ![](dist/flags/png/esh.png) | esh | eh | 732 |  | sah |
| ![](dist/flags/png/esp.png) | esp | es | 724 | esp | esp |
| ![](dist/flags/png/est.png) | est | ee | 233 | est | est |
| ![](dist/flags/png/eth.png) | eth | et | 231 | eth | eth |
| ![](dist/flags/png/fin.png) | fin | fi | 246 | fin | fin |
| ![](dist/flags/png/fji.png) | fji | fj | 242 | fij | fij |
| ![](dist/flags/png/flk.png) | flk | fk | 238 | flk | flk |
| ![](dist/flags/png/fra.png) | fra | fr | 250 | fra | fra |
| ![](dist/flags/png/fro.png) | fro | fo | 234 | far | fro |
| ![](dist/flags/png/fsm.png) | fsm | fm | 583 | fsm | fsm |
| ![](dist/flags/png/gab.png) | gab | ga | 266 | gab | gab |
| ![](dist/flags/png/gbr.png) | gbr | gb | 826 | gbr |  |
| ![](dist/flags/png/geo.png) | geo | ge | 268 | geo | geo |
| ![](dist/flags/png/ggy.png) | ggy | gg | 831 |  | gbg |
| ![](dist/flags/png/gha.png) | gha | gh | 288 | gha | gha |
| ![](dist/flags/png/gib.png) | gib | gi | 292 | gib | gbz |
| ![](dist/flags/png/gin.png) | gin | gn | 324 | gui | gui |
| ![](dist/flags/png/glp.png) | glp | gp | 312 | gud | glp |
| ![](dist/flags/png/gmb.png) | gmb | gm | 270 | gam | gam |
| ![](dist/flags/png/gnb.png) | gnb | gw | 624 | gbs | gnb |
| ![](dist/flags/png/gnq.png) | gnq | gq | 226 | geq | eqg |
| ![](dist/flags/png/grc.png) | grc | gr | 300 | gre | gre |
| ![](dist/flags/png/grd.png) | grd | gd | 308 | grn | grn |
| ![](dist/flags/png/grl.png) | grl | gl | 304 | grl | grl |
| ![](dist/flags/png/gtm.png) | gtm | gt | 320 | gua | gua |
| ![](dist/flags/png/guf.png) | guf | gf | 254 | fgu | guf |
| ![](dist/flags/png/gum.png) | gum | gu | 316 | gum | gum |
| ![](dist/flags/png/guy.png) | guy | gy | 328 | guy | guy |
| ![](dist/flags/png/hkg.png) | hkg | hk | 344 | hkg | hkg |
| ![](dist/flags/png/hmd.png) | hmd | hm | 334 |  |  |
| ![](dist/flags/png/hnd.png) | hnd | hn | 340 | hon | hon |
| ![](dist/flags/png/hrv.png) | hrv | hr | 191 | cro | cro |
| ![](dist/flags/png/hti.png) | hti | ht | 332 | hai | hai |
| ![](dist/flags/png/hun.png) | hun | hu | 348 | hun | hun |
| ![](dist/flags/png/idn.png) | idn | id | 360 | ina | idn |
| ![](dist/flags/png/imn.png) | imn | im | 833 |  | gbm |
| ![](dist/flags/png/ind.png) | ind | in | 356 | ind | ind |
| ![](dist/flags/png/iot.png) | iot | io | 86 |  |  |
| ![](dist/flags/png/irl.png) | irl | ie | 372 | irl | irl |
| ![](dist/flags/png/irn.png) | irn | ir | 364 | iri | irn |
| ![](dist/flags/png/irq.png) | irq | iq | 368 | irq | irq |
| ![](dist/flags/png/isl.png) | isl | is | 352 | isl | isl |
| ![](dist/flags/png/isr.png) | isr | il | 376 | isr | isr |
| ![](dist/flags/png/ita.png) | ita | it | 380 | ita | ita |
| ![](dist/flags/png/jam.png) | jam | jm | 388 | jam | jam |
| ![](dist/flags/png/jey.png) | jey | je | 832 |  | gbj |
| ![](dist/flags/png/jor.png) | jor | jo | 400 | jor | jor |
| ![](dist/flags/png/jpn.png) | jpn | jp | 392 | jpn | jpn |
| ![](dist/flags/png/kaz.png) | kaz | kz | 398 | kaz | kaz |
| ![](dist/flags/png/ken.png) | ken | ke | 404 | ken | ken |
| ![](dist/flags/png/kgz.png) | kgz | kg | 417 | kgz | kgz |
| ![](dist/flags/png/khm.png) | khm | kh | 116 | cam | cam |
| ![](dist/flags/png/kir.png) | kir | ki | 296 | kir | kir |
| ![](dist/flags/png/kna.png) | kna | kn | 659 | skn | skn |
| ![](dist/flags/png/kor.png) | kor | kr | 410 | kor | kor |
| ![](dist/flags/png/kwt.png) | kwt | kw | 414 | kuw | kuw |
| ![](dist/flags/png/lao.png) | lao | la | 418 | lao | lao |
| ![](dist/flags/png/lbn.png) | lbn | lb | 422 | lib | lib |
| ![](dist/flags/png/lbr.png) | lbr | lr | 430 | lbr | lbr |
| ![](dist/flags/png/lby.png) | lby | ly | 434 | lba | lby |
| ![](dist/flags/png/lca.png) | lca | lc | 662 | lca | lca |
| ![](dist/flags/png/lie.png) | lie | li | 438 | lie | lie |
| ![](dist/flags/png/lka.png) | lka | lk | 144 | sri | sri |
| ![](dist/flags/png/lso.png) | lso | ls | 426 | les | les |
| ![](dist/flags/png/ltu.png) | ltu | lt | 440 | ltu | ltu |
| ![](dist/flags/png/lux.png) | lux | lu | 442 | lux | lux |
| ![](dist/flags/png/lva.png) | lva | lv | 428 | lat | lva |
| ![](dist/flags/png/mac.png) | mac | mo | 446 | mac | mac |
| ![](dist/flags/png/maf.png) | maf | mf | 663 |  |  |
| ![](dist/flags/png/mar.png) | mar | ma | 504 | mar | mar |
| ![](dist/flags/png/mco.png) | mco | mc | 492 | mon | mon |
| ![](dist/flags/png/mda.png) | mda | md | 498 | mda | mda |
| ![](dist/flags/png/mdg.png) | mdg | mg | 450 | mad | mad |
| ![](dist/flags/png/mdv.png) | mdv | mv | 462 | mdv | mdv |
| ![](dist/flags/png/mex.png) | mex | mx | 484 | mex | mex |
| ![](dist/flags/png/mhl.png) | mhl | mh | 584 | msh | mhl |
| ![](dist/flags/png/mkd.png) | mkd | mk | 807 | mkd | mkd |
| ![](dist/flags/png/mli.png) | mli | ml | 466 | mli | mli |
| ![](dist/flags/png/mlt.png) | mlt | mt | 470 | mlt | mlt |
| ![](dist/flags/png/mmr.png) | mmr | mm | 104 | mya | mya |
| ![](dist/flags/png/mne.png) | mne | me | 499 | mgo | mne |
| ![](dist/flags/png/mng.png) | mng | mn | 496 | mgl | mng |
| ![](dist/flags/png/mnp.png) | mnp | mp | 580 | nma | nmi |
| ![](dist/flags/png/moz.png) | moz | mz | 508 | moz | moz |
| ![](dist/flags/png/mrt.png) | mrt | mr | 478 | mtn | mtn |
| ![](dist/flags/png/msr.png) | msr | ms | 500 | mnt | msr |
| ![](dist/flags/png/mtq.png) | mtq | mq | 474 | mrt | mtq |
| ![](dist/flags/png/mus.png) | mus | mu | 480 | mri | mri |
| ![](dist/flags/png/mwi.png) | mwi | mw | 454 | maw | mwi |
| ![](dist/flags/png/mys.png) | mys | my | 458 | mas | mas |
| ![](dist/flags/png/myt.png) | myt | yt | 175 | may | myt |
| ![](dist/flags/png/nam.png) | nam | na | 516 | nam | nam |
| ![](dist/flags/png/ncl.png) | ncl | nc | 540 | ncd | ncl |
| ![](dist/flags/png/ner.png) | ner | ne | 562 | nig | nig |
| ![](dist/flags/png/nfk.png) | nfk | nf | 574 | nfi | nfk |
| ![](dist/flags/png/nga.png) | nga | ng | 566 | ngr | nga |
| ![](dist/flags/png/nic.png) | nic | ni | 558 | nca | nca |
| ![](dist/flags/png/niu.png) | niu | nu | 570 | niu | niu |
| ![](dist/flags/png/nld.png) | nld | nl | 528 | ned | ned |
| ![](dist/flags/png/nor.png) | nor | no | 578 | nor | nor |
| ![](dist/flags/png/npl.png) | npl | np | 524 | nep | nep |
| ![](dist/flags/png/nru.png) | nru | nr | 520 | nru | nru |
| ![](dist/flags/png/nzl.png) | nzl | nz | 554 | nzl | nzl |
| ![](dist/flags/png/omn.png) | omn | om | 512 | oma | oma |
| ![](dist/flags/png/pak.png) | pak | pk | 586 | pak | pak |
| ![](dist/flags/png/pan.png) | pan | pa | 591 | pan | pan |
| ![](dist/flags/png/pcn.png) | pcn | pn | 612 |  | pcn |
| ![](dist/flags/png/per.png) | per | pe | 604 | per | per |
| ![](dist/flags/png/phl.png) | phl | ph | 608 | phi | phi |
| ![](dist/flags/png/plw.png) | plw | pw | 585 | plw | plw |
| ![](dist/flags/png/png.png) | png | pg | 598 | png | png |
| ![](dist/flags/png/pol.png) | pol | pl | 616 | pol | pol |
| ![](dist/flags/png/pri.png) | pri | pr | 630 | pur | pur |
| ![](dist/flags/png/prk.png) | prk | kp | 408 | prk | prk |
| ![](dist/flags/png/prt.png) | prt | pt | 620 | por | por |
| ![](dist/flags/png/pry.png) | pry | py | 600 | par | par |
| ![](dist/flags/png/pse.png) | pse | ps | 275 | ple | ple |
| ![](dist/flags/png/pyf.png) | pyf | pf | 258 | fpo | tah2 |
| ![](dist/flags/png/qat.png) | qat | qa | 634 | qat | qat |
| ![](dist/flags/png/reu.png) | reu | re | 638 | reu | reu |
| ![](dist/flags/png/rou.png) | rou | ro | 642 | rou | rou |
| ![](dist/flags/png/rus.png) | rus | ru | 643 | rus | rus |
| ![](dist/flags/png/rwa.png) | rwa | rw | 646 | rwa | rwa |
| ![](dist/flags/png/sau.png) | sau | sa | 682 | ksa | ksa |
| ![](dist/flags/png/sdn.png) | sdn | sd | 729 | sud | sud |
| ![](dist/flags/png/sen.png) | sen | sn | 686 | sen | sen |
| ![](dist/flags/png/sgp.png) | sgp | sg | 702 | sin | sin |
| ![](dist/flags/png/sgs.png) | sgs | gs | 239 |  |  |
| ![](dist/flags/png/shn.png) | shn | sh | 654 | hel | shn |
| ![](dist/flags/png/sjm.png) | sjm | sj | 744 |  |  |
| ![](dist/flags/png/slb.png) | slb | sb | 90 | sol | sol |
| ![](dist/flags/png/sle.png) | sle | sl | 694 | sle | sle |
| ![](dist/flags/png/slv.png) | slv | sv | 222 | esa | slv |
| ![](dist/flags/png/smr.png) | smr | sm | 674 | smr | smr |
| ![](dist/flags/png/som.png) | som | so | 706 | som | som |
| ![](dist/flags/png/spm.png) | spm | pm | 666 | spm | spm |
| ![](dist/flags/png/srb.png) | srb | rs | 688 | srb | srb |
| ![](dist/flags/png/ssd.png) | ssd | ss | 728 |  |  |
| ![](dist/flags/png/stp.png) | stp | st | 678 | stp | stp |
| ![](dist/flags/png/sur.png) | sur | sr | 740 | sur | sur |
| ![](dist/flags/png/svk.png) | svk | sk | 703 | svk | svk |
| ![](dist/flags/png/svn.png) | svn | si | 705 | slo | svn |
| ![](dist/flags/png/swe.png) | swe | se | 752 | swe | swe |
| ![](dist/flags/png/swz.png) | swz | sz | 748 | swz | swz |
| ![](dist/flags/png/sxm.png) | sxm | sx | 534 |  |  |
| ![](dist/flags/png/syc.png) | syc | sc | 690 | sey | sey |
| ![](dist/flags/png/syr.png) | syr | sy | 760 | syr | syr |
| ![](dist/flags/png/tca.png) | tca | tc | 796 | tks | tca |
| ![](dist/flags/png/tcd.png) | tcd | td | 148 | cha | cha |
| ![](dist/flags/png/tgo.png) | tgo | tg | 768 | tog | tog |
| ![](dist/flags/png/tha.png) | tha | th | 764 | tha | tha |
| ![](dist/flags/png/tjk.png) | tjk | tj | 762 | tjk | tjk |
| ![](dist/flags/png/tkl.png) | tkl | tk | 772 |  | tkl |
| ![](dist/flags/png/tkm.png) | tkm | tm | 795 | tkm | tkm |
| ![](dist/flags/png/tls.png) | tls | tl | 626 | tls | tls |
| ![](dist/flags/png/ton.png) | ton | to | 776 | tga | tga |
| ![](dist/flags/png/tpe.png) |  |  |  | tpe | tpe |
| ![](dist/flags/png/tto.png) | tto | tt | 780 | tto | tri |
| ![](dist/flags/png/tun.png) | tun | tn | 788 | tun | tun |
| ![](dist/flags/png/tur.png) | tur | tr | 792 | tur | tur |
| ![](dist/flags/png/tuv.png) | tuv | tv | 798 | tuv | tuv |
| ![](dist/flags/png/twn.png) | twn | tw | 158 |  |  |
| ![](dist/flags/png/tza.png) | tza | tz | 834 | tan | tan |
| ![](dist/flags/png/uga.png) | uga | ug | 800 | uga | uga |
| ![](dist/flags/png/ukr.png) | ukr | ua | 804 | ukr | ukr |
| ![](dist/flags/png/umi.png) | umi | um | 581 |  |  |
| ![](dist/flags/png/ury.png) | ury | uy | 858 | uru | uru |
| ![](dist/flags/png/usa.png) | usa | us | 840 | usa | usa |
| ![](dist/flags/png/uzb.png) | uzb | uz | 860 | uzb | uzb |
| ![](dist/flags/png/vat.png) | vat | va | 336 |  | vat |
| ![](dist/flags/png/vct.png) | vct | vc | 670 | vin | vin |
| ![](dist/flags/png/ven.png) | ven | ve | 862 | ven | ven |
| ![](dist/flags/png/vgb.png) | vgb | vg | 92 | ivb | vgb |
| ![](dist/flags/png/vir.png) | vir | vi | 850 | isv | vir |
| ![](dist/flags/png/vnm.png) | vnm | vn | 704 | vie | vie |
| ![](dist/flags/png/vut.png) | vut | vu | 548 | van | van |
| ![](dist/flags/png/wlf.png) | wlf | wf | 876 | waf | wlf |
| ![](dist/flags/png/wsm.png) | wsm | ws | 882 | sam | sam |
| ![](dist/flags/png/yem.png) | yem | ye | 887 | yem | yem |
| ![](dist/flags/png/zaf.png) | zaf | za | 710 | rsa | rsa |
| ![](dist/flags/png/zmb.png) | zmb | zm | 894 | zam | zam |
| ![](dist/flags/png/zwe.png) | zwe | zw | 716 | zim | zim |

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
