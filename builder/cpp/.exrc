let s:cpo_save=&cpo
set cpo&vim
inoremap <silent> <Plug>CocRefresh =coc#_complete()
nnoremap 	h sw
nnoremap 	 vw
tnoremap  
nmap  :nohl
nnoremap   w
omap <silent> % <Plug>(MatchitOperationForward)
xmap <silent> % <Plug>(MatchitVisualForward)
nmap <silent> % <Plug>(MatchitNormalForward)
nmap ,w,m <Plug>VimwikiMakeTomorrowDiaryNote
nmap ,w,y <Plug>VimwikiMakeYesterdayDiaryNote
nmap ,w,t <Plug>VimwikiTabMakeDiaryNote
nmap ,w,w <Plug>VimwikiMakeDiaryNote
nmap ,w,i <Plug>VimwikiDiaryGenerateLinks
nmap ,wi <Plug>VimwikiDiaryIndex
nmap ,ws <Plug>VimwikiUISelect
nmap ,wt <Plug>VimwikiTabIndex
nmap ,ww <Plug>VimwikiIndex
nnoremap ,f :FZF
noremap ,t :terminal
noremap ,l :ls
noremap ,ct :!ctags -R .
noremap ,mc :make clean
noremap ,mm :make
noremap ,gr :Gremove
noremap ,gd :Gvdiff
noremap ,gb :Gblame
noremap ,gs :Gstatus
noremap ,gll :Gpull
noremap ,gsh :Gpush
noremap ,gc :Gcommit
noremap ,ga :Gwrite
omap <silent> [% <Plug>(MatchitOperationMultiBackward)
xmap <silent> [% <Plug>(MatchitVisualMultiBackward)
nmap <silent> [% <Plug>(MatchitNormalMultiBackward)
omap <silent> ]% <Plug>(MatchitOperationMultiForward)
xmap <silent> ]% <Plug>(MatchitVisualMultiForward)
nmap <silent> ]% <Plug>(MatchitNormalMultiForward)
xmap a% <Plug>(MatchitVisualTextObject)
vmap gx <Plug>NetrwBrowseXVis
nmap gx <Plug>NetrwBrowseX
omap <silent> g% <Plug>(MatchitOperationBackward)
xmap <silent> g% <Plug>(MatchitVisualBackward)
nmap <silent> g% <Plug>(MatchitNormalBackward)
xnoremap <silent> <Plug>(coc-git-chunk-outer) :call coc#rpc#request('doKeymap', ['git-chunk-outer'])
onoremap <silent> <Plug>(coc-git-chunk-outer) :call coc#rpc#request('doKeymap', ['git-chunk-outer'])
xnoremap <silent> <Plug>(coc-git-chunk-inner) :call coc#rpc#request('doKeymap', ['git-chunk-inner'])
onoremap <silent> <Plug>(coc-git-chunk-inner) :call coc#rpc#request('doKeymap', ['git-chunk-inner'])
nnoremap <silent> <Plug>(coc-git-commit) :call coc#rpc#notify('doKeymap', ['git-commit'])
nnoremap <silent> <Plug>(coc-git-chunkinfo) :call coc#rpc#notify('doKeymap', ['git-chunkinfo'])
nnoremap <silent> <Plug>(coc-git-keepincoming) :call coc#rpc#notify('doKeymap', ['git-keepincoming'])
nnoremap <silent> <Plug>(coc-git-keepcurrent) :call coc#rpc#notify('doKeymap', ['git-keepcurrent'])
nnoremap <silent> <Plug>(coc-git-prevconflict) :call coc#rpc#notify('doKeymap', ['git-prevconflict'])
nnoremap <silent> <Plug>(coc-git-nextconflict) :call coc#rpc#notify('doKeymap', ['git-nextconflict'])
nnoremap <silent> <Plug>(coc-git-prevchunk) :call coc#rpc#notify('doKeymap', ['git-prevchunk'])
nnoremap <silent> <Plug>(coc-git-nextchunk) :call coc#rpc#notify('doKeymap', ['git-nextchunk'])
vnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#BrowseX(expand((exists("g:netrw_gx")? g:netrw_gx : '<cfile>')),netrw#CheckIfRemote())
vmap <silent> <Plug>(MatchitVisualTextObject) <Plug>(MatchitVisualMultiBackward)o<Plug>(MatchitVisualMultiForward)
onoremap <silent> <Plug>(MatchitOperationMultiForward) :call matchit#MultiMatch("W",  "o")
onoremap <silent> <Plug>(MatchitOperationMultiBackward) :call matchit#MultiMatch("bW", "o")
vnoremap <silent> <Plug>(MatchitVisualMultiForward) :call matchit#MultiMatch("W",  "n")m'gv``
vnoremap <silent> <Plug>(MatchitVisualMultiBackward) :call matchit#MultiMatch("bW", "n")m'gv``
nnoremap <silent> <Plug>(MatchitNormalMultiForward) :call matchit#MultiMatch("W",  "n")
nnoremap <silent> <Plug>(MatchitNormalMultiBackward) :call matchit#MultiMatch("bW", "n")
onoremap <silent> <Plug>(MatchitOperationBackward) :call matchit#Match_wrapper('',0,'o')
onoremap <silent> <Plug>(MatchitOperationForward) :call matchit#Match_wrapper('',1,'o')
vnoremap <silent> <Plug>(MatchitVisualBackward) :call matchit#Match_wrapper('',0,'v')m'gv``
vnoremap <silent> <Plug>(MatchitVisualForward) :call matchit#Match_wrapper('',1,'v')m'gv``
nnoremap <silent> <Plug>(MatchitNormalBackward) :call matchit#Match_wrapper('',0,'n')
nnoremap <silent> <Plug>(MatchitNormalForward) :call matchit#Match_wrapper('',1,'n')
onoremap <silent> <Plug>(coc-classobj-a) :call coc#rpc#request('selectSymbolRange', [v:false, '', ['Interface', 'Struct', 'Class']])
onoremap <silent> <Plug>(coc-classobj-i) :call coc#rpc#request('selectSymbolRange', [v:true, '', ['Interface', 'Struct', 'Class']])
vnoremap <silent> <Plug>(coc-classobj-a) :call coc#rpc#request('selectSymbolRange', [v:false, visualmode(), ['Interface', 'Struct', 'Class']])
vnoremap <silent> <Plug>(coc-classobj-i) :call coc#rpc#request('selectSymbolRange', [v:true, visualmode(), ['Interface', 'Struct', 'Class']])
onoremap <silent> <Plug>(coc-funcobj-a) :call coc#rpc#request('selectSymbolRange', [v:false, '', ['Method', 'Function']])
onoremap <silent> <Plug>(coc-funcobj-i) :call coc#rpc#request('selectSymbolRange', [v:true, '', ['Method', 'Function']])
vnoremap <silent> <Plug>(coc-funcobj-a) :call coc#rpc#request('selectSymbolRange', [v:false, visualmode(), ['Method', 'Function']])
vnoremap <silent> <Plug>(coc-funcobj-i) :call coc#rpc#request('selectSymbolRange', [v:true, visualmode(), ['Method', 'Function']])
nnoremap <silent> <Plug>(coc-cursors-position) :call coc#rpc#request('cursorsSelect', [bufnr('%'), 'position', 'n'])
nnoremap <silent> <Plug>(coc-cursors-word) :call coc#rpc#request('cursorsSelect', [bufnr('%'), 'word', 'n'])
vnoremap <silent> <Plug>(coc-cursors-range) :call coc#rpc#request('cursorsSelect', [bufnr('%'), 'range', visualmode()])
nnoremap <silent> <Plug>(coc-refactor) :call       CocActionAsync('refactor')
nnoremap <silent> <Plug>(coc-command-repeat) :call       CocAction('repeatCommand')
nnoremap <silent> <Plug>(coc-float-jump) :call       coc#float#jump()
nnoremap <silent> <Plug>(coc-float-hide) :call       coc#float#close_all()
nnoremap <silent> <Plug>(coc-fix-current) :call       CocActionAsync('doQuickfix')
nnoremap <silent> <Plug>(coc-openlink) :call       CocActionAsync('openLink')
nnoremap <silent> <Plug>(coc-references-used) :call       CocActionAsync('jumpUsed')
nnoremap <silent> <Plug>(coc-references) :call       CocActionAsync('jumpReferences')
nnoremap <silent> <Plug>(coc-type-definition) :call       CocActionAsync('jumpTypeDefinition')
nnoremap <silent> <Plug>(coc-implementation) :call       CocActionAsync('jumpImplementation')
nnoremap <silent> <Plug>(coc-declaration) :call       CocActionAsync('jumpDeclaration')
nnoremap <silent> <Plug>(coc-definition) :call       CocActionAsync('jumpDefinition')
nnoremap <silent> <Plug>(coc-diagnostic-prev-error) :call       CocActionAsync('diagnosticPrevious', 'error')
nnoremap <silent> <Plug>(coc-diagnostic-next-error) :call       CocActionAsync('diagnosticNext',     'error')
nnoremap <silent> <Plug>(coc-diagnostic-prev) :call       CocActionAsync('diagnosticPrevious')
nnoremap <silent> <Plug>(coc-diagnostic-next) :call       CocActionAsync('diagnosticNext')
nnoremap <silent> <Plug>(coc-diagnostic-info) :call       CocActionAsync('diagnosticInfo')
nnoremap <silent> <Plug>(coc-format) :call       CocActionAsync('format')
nnoremap <silent> <Plug>(coc-rename) :call       CocActionAsync('rename')
nnoremap <Plug>(coc-codeaction-line) :call       CocActionAsync('codeAction',         'n')
nnoremap <Plug>(coc-codeaction) :call       CocActionAsync('codeAction',         '')
vnoremap <silent> <Plug>(coc-codeaction-selected) :call       CocActionAsync('codeAction',         visualmode())
vnoremap <silent> <Plug>(coc-format-selected) :call       CocActionAsync('formatSelected',     visualmode())
nnoremap <Plug>(coc-codelens-action) :call       CocActionAsync('codeLensAction')
nnoremap <Plug>(coc-range-select) :call       CocActionAsync('rangeSelect',     '', v:true)
vnoremap <silent> <Plug>(coc-range-select-backward) :call       CocActionAsync('rangeSelect',     visualmode(), v:false)
vnoremap <silent> <Plug>(coc-range-select) :call       CocActionAsync('rangeSelect',     visualmode(), v:true)
nnoremap <silent> <Plug>GitGutterPreviewHunk :call gitgutter#utility#warn('please change your map <Plug>GitGutterPreviewHunk to <Plug>(GitGutterPreviewHunk)')
nnoremap <silent> <Plug>(GitGutterPreviewHunk) :GitGutterPreviewHunk
nnoremap <silent> <Plug>GitGutterUndoHunk :call gitgutter#utility#warn('please change your map <Plug>GitGutterUndoHunk to <Plug>(GitGutterUndoHunk)')
nnoremap <silent> <Plug>(GitGutterUndoHunk) :GitGutterUndoHunk
nnoremap <silent> <Plug>GitGutterStageHunk :call gitgutter#utility#warn('please change your map <Plug>GitGutterStageHunk to <Plug>(GitGutterStageHunk)')
nnoremap <silent> <Plug>(GitGutterStageHunk) :GitGutterStageHunk
xnoremap <silent> <Plug>GitGutterStageHunk :call gitgutter#utility#warn('please change your map <Plug>GitGutterStageHunk to <Plug>(GitGutterStageHunk)')
xnoremap <silent> <Plug>(GitGutterStageHunk) :GitGutterStageHunk
nnoremap <silent> <expr> <Plug>GitGutterPrevHunk &diff ? '[c' : ":\call gitgutter#utility#warn('please change your map \<Plug>GitGutterPrevHunk to \<Plug>(GitGutterPrevHunk)')\"
nnoremap <silent> <expr> <Plug>(GitGutterPrevHunk) &diff ? '[c' : ":\execute v:count1 . 'GitGutterPrevHunk'\"
nnoremap <silent> <expr> <Plug>GitGutterNextHunk &diff ? ']c' : ":\call gitgutter#utility#warn('please change your map \<Plug>GitGutterNextHunk to \<Plug>(GitGutterNextHunk)')\"
nnoremap <silent> <expr> <Plug>(GitGutterNextHunk) &diff ? ']c' : ":\execute v:count1 . 'GitGutterNextHunk'\"
xnoremap <silent> <Plug>(GitGutterTextObjectOuterVisual) :call gitgutter#hunk#text_object(0)
xnoremap <silent> <Plug>(GitGutterTextObjectInnerVisual) :call gitgutter#hunk#text_object(1)
onoremap <silent> <Plug>(GitGutterTextObjectOuterPending) :call gitgutter#hunk#text_object(0)
onoremap <silent> <Plug>(GitGutterTextObjectInnerPending) :call gitgutter#hunk#text_object(1)
nnoremap <BS> c
nnoremap <F2> :bprev
nnoremap <F3> :bnext
inoremap this this->
let &cpo=s:cpo_save
unlet s:cpo_save
set expandtab
set helplang=es
set runtimepath=~/.config/nvim,~/.config/nvim/plugged/vim-fugitive,~/.config/nvim/plugged/vim-gitgutter,~/.config/nvim/plugged/tabular,~/.config/nvim/plugged/vimwiki,~/.config/nvim/plugged/vim-airline,~/.config/nvim/plugged/dracula,~/.config/nvim/plugged/vim-code-dark,~/.config/nvim/plugged/typescript-vim,~/.config/nvim/plugged/vim-ripgrep,~/.config/nvim/plugged/coc.nvim,~/.config/nvim/plugged/fzf,/etc/xdg/nvim,~/.local/share/nvim/site,/usr/local/share/nvim/site,/usr/share/nvim/site,/usr/share/nvim/runtime,/usr/share/nvim/runtime/pack/dist/opt/matchit,/usr/share/nvim/site/after,/usr/local/share/nvim/site/after,~/.local/share/nvim/site/after,/etc/xdg/nvim/after,~/.config/nvim/after,~/.config/nvim/plugged/tabular/after,~/.config/nvim/plugged/dracula/after,/usr/share/vim/vimfiles
set shiftwidth=4
set smartcase
set smartindent
set noswapfile
set tabstop=4
set updatetime=100
set window=47
" vim: set ft=vim :
