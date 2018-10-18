# Git bonus

> Collection of git commands

<!-- inject:toc -->
* [Clone a single branch in git](#clone-a-single-branch-in-git)
* [Compare two revisions of a file](#compare-two-revisions-of-a-file)
* [Compare current staged file against the repository](#compare-current-staged-file-against-the-repository)
* [Compare current unstaged file against the repository](#compare-current-unstaged-file-against-the-repository)
* [Delete a branch on a remote repository](#delete-a-branch-on-a-remote-repository)
* [Checkout a branch on a remote repository](#checkout-a-branch-on-a-remote-repository)
* [Undo the last commit, leaving changes in the the index](#undo-the-last-commit,-leaving-changes-in-the-the-index)
* [Discard all local changes in your working directory](#discard-all-local-changes-in-your-working-directory)
* [Undo `git add` before commit](#undo-`git-add`-before-commit)
* [Local branch look identical to remote branch](#local-branch-look-identical-to-remote-branch)
* [Caching you HTTPS password in git](#caching-you-https-password-in-git)
* [Commit case-sensitive only filename changes in git](#commit-case-sensitive-only-filename-changes-in-git)
* [Squash Multiple Commits](#squash-multiple-commits)
* [Stash Uncommitted Changes](#stash-uncommitted-changes)
* [Who changed what and when in <file>](#who-changed-what-and-when-in-<file>)
* [Create branch without any parents](#create-branch-without-any-parents)
* [Delete local branches that have been removed from remote on fetch/pull](#delete-local-branches-that-have-been-removed-from-remote-on-fetch/pull)
* [Enable Git's autosquash feature by default](#enable-git's-autosquash-feature-by-default)
* [Quickly checkout the previous branch you were on](#quickly-checkout-the-previous-branch-you-were-on)
* [Delete local branches which have already been merged into master](#delete-local-branches-which-have-already-been-merged-into-master)
* [Want to change the commit message](#want-to-change-the-commit-message)
* [Add files to the previous commit](#add-files-to-the-previous-commit)
<!-- endinject -->
<!-- inject:content -->
## Clone a single branch in git
```sh
git clone user@git-server:project_name.git -b branch_name /some/folder
```
## Compare two revisions of a file
```sh
git diff <commit1> <commit2> <file_name>
```
## Compare current staged file against the repository
```sh
git diff --staged <file_name>
```
## Compare current unstaged file against the repository
```sh
git diff <file_name>
```
## Delete a branch on a remote repository
```sh
git push origin :mybranchname
```
## Checkout a branch on a remote repository
```sh
git checkout -b mybranchname origin/mybranchname
```
## Undo the last commit, leaving changes in the the index
```sh
git reset --soft HEAD^
```
## Discard all local changes in your working directory
```sh
git reset --hard HEAD
```
## Undo `git add` before commit
```sh
git reset <file>
```
## Local branch look identical to remote branch
```sh
git reset --hard origin/master
```
## Caching you HTTPS password in git
```sh
git config --global credential.helper store
```
## Commit case-sensitive only filename changes in git
```sh
git mv -f OldFileNameCase newfilenamecase
```
## Squash Multiple Commits
```sh
git rebase -i HEAD~2
```
## Stash Uncommitted Changes
```sh
git stash
```
## Who changed what and when in <file>
```sh
git blame <file>
```
## Create branch without any parents
```sh
git checkout --orphan mybranchname
```
## Delete local branches that have been removed from remote on fetch/pull
```sh
git config --global fetch.prune true
```
## Enable Git's autosquash feature by default
```sh
git config --global rebase.autosquash true
```
## Quickly checkout the previous branch you were on
```sh
git checkout -
```
## Delete local branches which have already been merged into master
```sh
git branch --merged master | grep -v "master" | xargs -n 1 git branch -d
```
## Want to change the commit message
```sh
git commit --amend -m "New commit message"
```
## Add files to the previous commit
```sh
git add file
git commit --amend --no-edit
```
<!-- endinject -->
