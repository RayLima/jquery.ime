( function ( $ ) {
	'use strict';

	var yky = {
		id: 'yky',
		name: 'YKY shorthands',
		description: 'YKY`s shorthands, for testing only.',
		date: '2013-11-17',
		URL: 'http://github.com/Cybernetic1/jquery.ime',
		author: 'YKY',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
		
['pattrec ','pattern recognition '],
['struct ','structure '],
['werent ','weren`t '],
['wubson ','would you be shy or nervous '],
['diffc ','difference '],
['difft ','difficult '],
['neway ','anyway '],
['newhr ','anywhere '],
['propr ','proprietary '],
['shdnt ','shouldn`t '],
['wasnt ','wasn`t '],
['abit ','a bit '],
['actt ','actually '],
['agst ','against '],
['algo ','algorithm '],
['alot ','a lot '],
['arnt ','arn`t '],
['atst ','at the same time '],
['bnth ','beneath '],
['btyf ','beautiful '],
['cant ','can`t '],
['cdnt ','couldn`t '],
['chan ','channel '],
['comp ','computer '],
['cont ','continue '],
['ddnt ','didn`t '],
['desp ','desparate '],
['diff ','different '],
['dont ','don`t '],
['epsy ','evolutionary psychology '],
['hccg ','high class call girl '],
['hhhh ','hehehe '],
['hmln ','humiliation '],
['hrsf ','herself '],
['hsnt ','hasn`t '],
['hvnt ','haven`t '],
['info ','information '],
['inno ','innocent '],
['intg ','intelligence '],
['intr ','introduce '],
['isnt ','isn`t '],
['lang ','language '],
['mskt ','miniskirt '],
['mysf ','myself '],
['necy ','necessarily '],
['neth ','anything '],
['nite ','night '],
['poss ','possible '],
['prob ','problem '],
['prog ','program '],
['shel ','she`ll '],
['sugn ','suggestion '],
['temp ','temporary '],
['thrd ','there`d '],
['thrl ','there`ll '],
['thro ','through '],
['thrr ','there`re '],
['thyd ','they`d '],
['thyl ','they`ll '],
['thyr ','they`re '],
['thyv ','they`ve '],
['undn ','underneath '],
['ursf ','yourself '],
['watd ','what`d '],
['wate ','whatever '],
['wdnt ','wouldn`t '],
['whod ','who`d '],
['wont ','won`t '],
['yngr ','younger '],
['1st ','first '],
['2nd ','second '],
['3rd ','third '],
['41t ','for the first time '],
['abt ','about '],
['acg ','amateur call girl '],
['aft ','after '],
['alm ','almost '],
['alo ','a lot of '],
['alr ','alright '],
['alw ','always '],
['ano ','another '],
['ans ','answer '],
['arn ','around '],
['atm ','at the moment '],
['awl ','a while '],
['bng ','being '],
['bsi ','beside '],
['bss ','*bzzzzt* '],
['btw ','by the way '],
['bty ','beauty '],
['chk ','check '],
['cmp ','compare '],
['cos ','cause '],
['dau ','daughter '],
['ddy ','daddy '],
['esp ','especially '],
['eth ','everything '],
['exm ','example '],
['exp ','experience '],
['fav ','favorite '],
['fex ','for example '],
['fsy ','fantasy '],
['gt2 ','got to '],
['hap ','happen '],
['hed ','he`d '],
['hel ','he`ll '],
['hhh ','hehe '],
['hih ','highheel '],
['hml ','humiliate '],
['hpy ','happy '],
['ifo ','in front of '],
['ind ','independent '],
['int ','interest '],
['irl ','in real life '],
['itd ','it`d '],
['itl ','it`ll '],
['kb- ','KB (knowledgebase) '],
['kng ','knowledge '],
['ltm ','last time '],
['ltr ','later '],
['MDL ','minimum description length '],
['mem ','memory '],
['mny ','many '],
['nbd ','nobody '],
['ne1 ','anyone '],
['nec ','necessary '],
['nem ','anymore '],
['nev ','never '],
['nl- ','NL (natural language) '],
['no1 ','no one '],
['nth ','nothing '],
['ntm ','next time '],
['nty ','naughty '],
['nvr ','never '],
['obe ','obedient '],
['ofc ','of course '],
['oft ','often '],
['ovr ','over '],
['pix ','pics '],
['pll ','parallel '],
['ppl ','people '],
['pst ','prostitute '],
['ptr ','particular '],
['rem ','remember '],
['rep ','representation '],
['rpg ','roleplaying '],
['ruf ','rough '],
['sci ','science '],
['sev ','several '],
['shd ','should '],
['sht ','short '],
['skt ','skirt '],
['slp ','sleep '],
['smv ','submissive '],
['sth ','something '],
['stg ','stranger '],
['sty ','slutty '],
['sug ','suggest '],
['tgt ','together '],
['thg ','thing '],
['thk ','think '],
['tho ','though '],
['thr ','there '],
['tht ','thought '],
['thy ','they '],
['tlk ','talk '],
['tmr ','tomorrow '],
['und ','under '],
['ure ','you`re '],
['urs ','yours '],
['usa ','US '],
['wat ','what '],
['wed ','we`d '],
['wel ','we`ll '],
['wer ','we`re '],
['wev ','we`ve '],
['whl ','whole '],
['whr ','where '],
['wko ','what kind of '],
['wrk ','work '],
['wsp ','whisper '],
['yng ','young '],
['ytd ','yesterday '],
['2b ','to be '],
['2d ','to do '],
['2m ','2 or more men '],
['2n ','tonight '],
['>H ','transhumanist '],
['ag ','again '],
['al ','already '],
['b4 ','before '],
['bc ','because '],
['bh ','behind '],
['bk ','back '],
['bn ','been '],
['bt ','between '],
['c2 ','come to '],
['cd ','could '],
['cg ','call girl '],
['ch ','change '],
['ct ','chat '],
['cu ','can you '],
['dl ','download '],
['dn ','down '],
['du ','do you '],
['e1 ','everyone '],
['EA ','evolutionary algorithms '],
['ee ','e-mail '],
['el ','else '],
['em ','them '],
['EP ','evolutionary programming '],
['fn ','friend '],
['fr ','from '],
['g2 ','go to '],
['GA ','genetic algorithms '],
['gb ','gangbang '],
['gd ','good '],
['GI ','general intelligence '],
['GP ','genetic programming '],
['gv ','give '],
['h2 ','how to '],
['hb ','how about '],
['hc ','how come '],
['hh ','heh '],
['hm ','home '],
['hr ','here '],
['hv ','have '],
['i2 ','into '],
['ic ','I see '],
['id ','I`d '],
['ig ','I guess '],
['il ','I`ll '],
['im ','I`m '],
['iv ','I`ve '],
['je ','jealous '],
['kd ','kind '],
['kk ','is that OK? '],
['kn ','know '],
['ko ','kind of '],
['l2 ','like to '],
['lk ','look '],
['ll ','will '],
['lo ','hello '],
['lt ','little '],
['lv ','love '],
['m2 ','me too '],
['mb ','maybe '],
['md ','made '],
['mf ','my friend '],
['mh ','much '],
['mk ','make '],
['mn ','mean '],
['n2 ','need to '],
['nc ','nice '],
['ne ','any '],
['nf ','enough '],
['nm ','nevermind '],
['nt ','and then? '],
['nu ','and you? '],
['nv ','never '],
['nx ','next '],
['ny ','NY '],
['oe ','only '],
['ow ','otherwise '],
['pb ','probably '],
['ph ','perhaps '],
['Pc ','probabilistic '],
['pt ','point '],
['pv ','private '],
['py ','play '],
['qt ','quite '],
['rl ','real '],
['RL ','reinforcement learning '],
['rp ','roleplay '],
['rt ','right '],
['ru ','are you '],
['ry ','really '],
['s1 ','someone '],
['sc ','scene '],
['sd ','sound '],
['sf ','self '],
['sg ','suggest '],
['sm ','same '],
['sp ','special '],
['sq ','squeeze '],
['st ','still '],
['sw ','somewhat '],
['sy ','sorry '],
['t2 ','talk to '],
['t4 ','therefore '],
['td ','that`d '],
['te ','their '],
['th ','this '],
['tk ','take '],
['tl ','that`ll '],
['tm ','time '],
['tn ','then '],
['tx ','thanks '],
['u2 ','you too '],
['uc ','you see? '],
['ud ','you`d '],
['ul ','you`ll '],
['un ','understand '],
['ur ','your '],
['uu ','usually '],
['uv ','you`ve '],
['VC ','virtual credit '],
['w2 ','want to '],
['wd ','would '],
['wh ','which '],
['wi ','within '],
['wk ','work '],
['wl ','while '],
['wn ','when '],
['wo ','without '],
['wr ','wear '],
['wt ','want '],
['ww ','woman '],
['ye ','yeah '],
['yn ','why not? '],
['1 ','one '],
['b ','but '],
['c ','see '],
['d ','the '],
['e ','every '],
['f ','for '],
['g ','girl '],
['h ','how '],
['i ','I '],
['j ','just '],
['k ','ok '],
['l ','like '],
['m ','more '],
['n ','and '],
['o ','other '],
['p ','pretty '],
['q ','question '],
['r ','are '],
['t ','that '],
['u ','you '],
['v ','very '],
['w ','with '],
['x ','cause '],
['y ','why '],
['cyb1', '半機器人一號']]
	};

	$.ime.register( yky );
}( jQuery ) );
