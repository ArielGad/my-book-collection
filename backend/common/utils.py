import string
import wikipedia


def get_wiki_link(value_to_look_for):
    hebrew_chars = set('אבגדהוזחטיכךלמםנןסעפףצץקרשת')

    for char in value_to_look_for:
        if char in string.whitespace:
            continue
        elif char in hebrew_chars:
            wikipedia.set_lang('he')
            break
    try:
        if value_to_look_for.lower() in [content.lower() for content in wikipedia.search(value_to_look_for)]:
            return wikipedia.page(value_to_look_for).url
    except wikipedia.exceptions:
        pass
    finally:
        return 'https://en.wikipedia.org/wiki/'
