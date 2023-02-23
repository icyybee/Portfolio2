import adobeXd from '../assets/skills/adobe-xd.svg'
import apollo from '../assets/skills/apollo.svg'
import adobeaudition from '../assets/skills/adobeaudition.svg'
import afterEffects from '../assets/skills/after-effects.svg'
import angular from '../assets/skills/angular.svg'
import aws from '../assets/skills/aws.svg'
import bootstrap from '../assets/skills/bootstrap.svg'
import bulma from '../assets/skills/bulma.svg'
import c from '../assets/skills/c.svg'
import capacitorjs from '../assets/skills/capacitorjs.svg'
import coffeescript from '../assets/skills/coffeescript.svg'
import cplusplus from '../assets/skills/cplusplus.svg'
import csharp from '../assets/skills/csharp.svg'
import css from '../assets/skills/css.svg'
import dart from '../assets/skills/dart.svg'
import deno from '../assets/skills/deno.svg'
import django from '../assets/skills/django.svg'
import docker from '../assets/skills/docker.svg'
import firebase from '../assets/skills/firebase.svg'
import gcp from '../assets/skills/gcp.svg'
import gimp from '../assets/skills/gimp.svg'
import git from '../assets/skills/git.svg'
import go from '../assets/skills/go.svg'
import graphql from '../assets/skills/graphql.svg'
import html from '../assets/skills/html.svg'
import illustrator from '../assets/skills/illustrator.svg'
import java from '../assets/skills/java.svg'
import javascript from '../assets/skills/javascript.svg'
import julia from '../assets/skills/julia.svg'
import kotlin from '../assets/skills/kotlin.svg'
import lightroom from '../assets/skills/lightroom.svg'
import materialui from '../assets/skills/materialui.svg'
import matlab from '../assets/skills/matlab.svg'
import memsql from '../assets/skills/memsql.svg'
import mongoDB from '../assets/skills/mongoDB.svg'
import mysql from '../assets/skills/mysql.svg'
import nextJS from '../assets/skills/nextJS.svg'
import nginx from '../assets/skills/nginx.svg'
import numpy from '../assets/skills/numpy.svg'
import nuxtJS from '../assets/skills/nuxtJS.svg'
import opencv from '../assets/skills/opencv.svg'
import photoshop from '../assets/skills/photoshop.svg'
import php from '../assets/skills/php.svg'
import postgresql from '../assets/skills/postgresql.svg'
import premierepro from '../assets/skills/premierepro.svg'
import python from '../assets/skills/python.svg'
import pytorch from '../assets/skills/pytorch.svg'
import react from '../assets/skills/react.svg'
import redux from '../assets/skills/redux.svg'
import ruby from '../assets/skills/ruby.svg'
import selenium from '../assets/skills/selenium.svg'
import strapi from '../assets/skills/strapi.svg'
import svelte from '../assets/skills/svelte.svg'
import swift from '../assets/skills/swift.svg'
import tailwind from '../assets/skills/tailwind.svg'
import tensorflow from '../assets/skills/tensorflow.svg'
import typescript from '../assets/skills/typescript.svg'
import vitejs from '../assets/skills/vitejs.svg'
import vue from '../assets/skills/vue.svg'
import vuetifyjs from '../assets/skills/vuetifyjs.svg'
import webix from '../assets/skills/webix.svg'
import wordpress from '../assets/skills/wordpress.svg'

import azure from '../assets/skills/azure.svg'
import blender from '../assets/skills/blender.svg'
import fastify from '../assets/skills/fastify.svg'
import figma from '../assets/skills/figma.svg'
import flutter from '../assets/skills/flutter.svg'
import haxe from '../assets/skills/haxe.svg'
import ionic from '../assets/skills/ionic.svg'
import markdown from '../assets/skills/markdown.svg'
import microsoftoffice from '../assets/skills/microsoftoffice.svg'
import picsart from '../assets/skills/picsart.svg'
import sketch from '../assets/skills/sketch.svg'
import unity from '../assets/skills/unity.svg'
import wolframalpha from '../assets/skills/wolframalpha.svg'

import canva from '../assets/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'apollo':
            return apollo;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'redux':
            return redux;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        default:
            break;
    }
}
