NAME=ob-control-center
VERSION=0.1.3
TRANSLATIONS=bs hr
bindir=/usr/bin
sysconfdir=/etc
sharedir=/usr/share
localedir=$(sharedir)/locale

all:

messages: usr/share/ob-control-center/translation
	xgettext -d ob-control-center -o usr/share/ob-control-center/ob-control-center.pot -L Shell --from-code utf-8 usr/share/ob-control-center/translation
	for i in $(TRANSLATIONS); do \
		msgmerge -U po/$$i.po usr/share/ob-control-center/ob-control-center.pot; \
	done

install:
	mkdir -p $(DESTDIR)/$(bindir)
	mkdir -p $(DESTDIR)/$(sharedir)/$(NAME)
	mkdir -p $(DESTDIR)/$(sharedir)/applications
	mkdir -p $(DESTDIR)/$(localedir)
	install -m 644 ob-control-center.desktop $(DESTDIR)/$(sharedir)/applications
	install -m 755 usr/bin/* $(DESTDIR)/$(bindir)
	cp -avx usr/share/$(NAME)/* $(DESTDIR)/$(sharedir)/$(NAME)
	@for l in $(TRANSLATIONS); do \
	mkdir -p  $(DESTDIR)/$(localedir)/$$l/LC_MESSAGES; \
	msgcat po/$$l.po | msgfmt -o $(DESTDIR)/$(localedir)/$$l/LC_MESSAGES/ob-control-center.mo - ; \
	done

dist:
	git archive --format=tar --prefix=$(NAME)-$(VERSION)/ HEAD | xz -2vec -T0 > $(NAME)-$(VERSION).tar.xz;
	$(info $(NAME)-$(VERSION).tar.xz is ready)
